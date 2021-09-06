import { IUser } from '@abstract/models/auth/IUser';

export interface IAuthServices {
    SignInWithUsernamePassword: (userName: string, password: string) => Promise<IUser>;
    SignInWithGoogle: () => Promise<IUser>;
    SignOut: () => Promise<void>;
}