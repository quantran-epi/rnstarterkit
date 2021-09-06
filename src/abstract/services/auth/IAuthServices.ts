import { IUser } from './../../models/auth/IUser';

export interface IAuthServices {
    SignInWithUsernamePassword: (userName: string, password: string) => Promise<IUser>;
    SignOut: () => Promise<void>;
}