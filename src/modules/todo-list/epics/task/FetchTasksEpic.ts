import { RootState } from 'src/store';
import { IEpicDependencies } from '@abstract/redux/IEpicDependencies';
import { catchError, Observable, from, of } from "rxjs";
import { filter, map, switchMap } from 'rxjs/operators'
import { fetchTasks, fetchTasksCompleted, fetchTasksFailed } from "@modules/todo-list/reducers/TaskReducer";
import { Epic, StateObservable } from "redux-observable";
import { IAction } from "@abstract/redux";
import { FetchTasksCompletedAction, FetchTasksFailedAction } from "@modules/todo-list/actions";
import { Logger } from '@utils/logger';

export const FetchTasksEpic:
    Epic<IAction, FetchTasksCompletedAction | FetchTasksFailedAction, RootState, IEpicDependencies>
    = (action$: Observable<IAction>, state$: StateObservable<RootState>, { Services }) => {
        return action$.pipe(
            filter(fetchTasks.match),
            switchMap(() => from(Services.Task.all()).pipe(
                map(tasks => fetchTasksCompleted({ tasks: tasks })),
                catchError(error => {
                    Logger.error(error);
                    return of(fetchTasksFailed({ message: "Failed to load tasks" }))
                })
            )),
        )
    }