import { ITask } from "@abstract/models/todo-list/ITask";
import { IPayloadAction } from "@abstract/redux";

export type UpdateTask = IPayloadAction<{ task: ITask }>
export type UpdateTaskCompleted = IPayloadAction<{ task: ITask }>
export type UpdateTaskFailed = IPayloadAction<{}>