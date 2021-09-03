import { ITask } from '@abstract/models/todo-list/ITask';
import { IPayloadAction } from '@abstract/redux';

export type FetchTasksCompletedAction = IPayloadAction<{ tasks: Array<ITask> }>;
export type FetchTasksFailedAction = IPayloadAction<{}>;