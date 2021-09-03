import { IEpicDependencies } from '@abstract/redux/IEpicDependencies';
import { RootState } from 'src/store';
import { DeleteTask, DeleteTaskCompleted, DeleteTaskFailed } from "@modules/todo-list/actions/task";
import { catchError, from, Observable, of } from 'rxjs';
import { exhaustMap, filter, map } from 'rxjs/operators'
import { IAction } from '@abstract/redux';
import { Epic, StateObservable } from 'redux-observable';
import { deleteTask, deleteTaskCompleted, deleteTaskFailed } from '@modules/todo-list/reducers/TaskReducer';
import { Logger } from '@utils/logger';

export const DeleteTaskEpic: Epic<IAction, DeleteTaskCompleted | DeleteTaskFailed, RootState, IEpicDependencies>
    = (action$: Observable<IAction>, state$: StateObservable<RootState>, { Services }) => {
        return action$.pipe(
            filter(deleteTask.match),
            exhaustMap((action: DeleteTask) => from(Services.Task.delete(action.payload.taskId)).pipe(
                map(() => deleteTaskCompleted()),
                catchError(error => {
                    Logger.error(error);
                    return of(deleteTaskFailed({ message: "Failed to delete task" }))
                })
            ))
        )
    }