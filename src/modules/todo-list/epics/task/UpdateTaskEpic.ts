import { Observable, catchError, from, of } from 'rxjs';
import { filter, map, exhaustMap } from 'rxjs/operators';
import { IEpicDependencies } from './../../../../abstract/redux/IEpicDependencies';
import { IAction } from '@abstract/redux';
import { Epic, StateObservable } from 'redux-observable';
import { RootState } from 'src/store';
import { updateTask, updateTaskCompleted, updateTaskFailed } from '@modules/todo-list/reducers/TaskReducer';
import { Logger } from '@utils/logger';
import { UpdateTaskCompleted, UpdateTaskFailed } from '@modules/todo-list/actions/task';

export const UpdateTaskEpic: Epic<IAction, UpdateTaskCompleted | UpdateTaskFailed, RootState, IEpicDependencies>
    = (action$: Observable<IAction>, state$: StateObservable<RootState>, { Services }) => {
        return action$.pipe(
            filter(updateTask.match),
            exhaustMap(action => from(Services.Task.update(action.payload.task)).pipe(
                map(task => updateTaskCompleted({ task: task })),
                catchError(error => {
                    Logger.error(error);
                    return of(updateTaskFailed({ message: "Failed to update task" }))
                })
            ))
        )
    }