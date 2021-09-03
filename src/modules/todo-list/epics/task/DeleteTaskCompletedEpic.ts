import { fetchTasks } from '@modules/todo-list/reducers/TaskReducer';
import { deleteTaskCompleted } from '@modules/todo-list/reducers/TaskReducer';
import { Epic } from 'redux-observable';
import { IAction } from "@abstract/redux";
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const DeleteTaskCompletedEpic: Epic<IAction, IAction>
    = (action$: Observable<IAction>) => {
        return action$.pipe(
            filter(deleteTaskCompleted.match),
            map(() => fetchTasks())
        )
    }