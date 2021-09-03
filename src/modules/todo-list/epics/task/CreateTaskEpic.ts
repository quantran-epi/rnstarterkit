import { from, Observable, of } from 'rxjs';
import { catchError, filter, map, exhaustMap } from 'rxjs/operators';
import { IEpicDependencies } from '@abstract/redux/IEpicDependencies';
import { RootState } from './../../../../store';
import { IAction } from '@abstract/redux';
import { Epic, StateObservable } from 'redux-observable';
import { createTask, createTaskCompleted, createTaskFailed } from '@modules/todo-list/reducers/TaskReducer';
import { Logger } from '@utils/logger';
import { CreateTaskCompleted, CreateTaskFailed } from '@modules/todo-list/actions/task';

export const CreateTaskEpic: Epic<IAction, CreateTaskCompleted | CreateTaskFailed, RootState, IEpicDependencies>
    = (action$: Observable<IAction>, state$: StateObservable<RootState>, { Services }) => {
        return action$.pipe(
            filter(createTask.match),
            exhaustMap(action => from(Services.Task.create(action.payload.task)).pipe(
                map(() => createTaskCompleted()),
                catchError(error => {
                    Logger.error(error)
                    return of(createTaskFailed({ message: "Failed to create task" }))
                })
            ))
        )
    }