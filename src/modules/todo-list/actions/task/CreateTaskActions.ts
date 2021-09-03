import { IAction } from '@abstract/redux/IAction';
import { ITask } from '@abstract/models/todo-list/ITask';
import { IPayloadAction } from '@abstract/redux';

export type CreateTask = IPayloadAction<{ task: ITask }>
export type CreateTaskCompleted = IAction
export type CreateTaskFailed = IPayloadAction<{}>