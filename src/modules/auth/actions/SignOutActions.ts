import { IPayloadAction } from '@abstract/redux/IPayloadAction';
import { IAction } from '@abstract/redux/IAction';

export type SignOut = IAction;
export type SignOutCompleted = IAction;
export type SignOutFailed = IPayloadAction<{}>;