import { IUser } from '@abstract/models/auth/IUser';
import { IUserLoginUsernamePasswordViewModel } from './../view-models/IUserViewModel';
import { IPayloadAction } from '@abstract/redux/IPayloadAction';

export type SignInUsernamePassword = IPayloadAction<IUserLoginUsernamePasswordViewModel>
export type SignInUsernamePasswordCompleted = IPayloadAction<{ user: IUser }>
export type SignInUsernamePasswordFailed = IPayloadAction<{}>