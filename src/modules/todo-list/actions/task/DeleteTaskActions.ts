import { IPayloadAction, IAction } from "@abstract/redux";

export type DeleteTask = IPayloadAction<{ taskId: string }>;
export type DeleteTaskCompleted = IAction;
export type DeleteTaskFailed = IPayloadAction<{}>;