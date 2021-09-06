import { IUser } from '@abstract/models/auth/IUser';
import { IPayloadAction } from '@abstract/redux/IPayloadAction';
export type SetUser = IPayloadAction<{ user: IUser | undefined }>