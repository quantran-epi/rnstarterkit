import { IUser } from '@abstract/models/auth/IUser';
import { IAction, IPayloadAction } from '@abstract/redux';

export type SignInWithGoogle = IAction
export type SignInWithGoogleCompleted = IPayloadAction<{ user: IUser }>
export type SignInWithGoogleFailed = IPayloadAction<{}>