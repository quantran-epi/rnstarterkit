import { SetUser } from './../actions/SetUserAction';
import { IUser } from '@abstract/models/auth/IUser';
import { createSlice } from '@reduxjs/toolkit';
import { SignInUsernamePassword, SignInUsernamePasswordCompleted, SignInUsernamePasswordFailed, SignOutFailed } from '../actions';

interface AuthState {
    user?: IUser;
    signingIn: boolean;
    signingOut: boolean;
    error?: string;
}

const initialState: AuthState = {
    user: undefined,
    signingIn: false,
    signingOut: false,
}

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        signInUsernamePassword: (state, action: SignInUsernamePassword) => {
            state.signingIn = true;
        },
        signInUsernamePasswordSuccess: (state, action: SignInUsernamePasswordCompleted) => {
            state.signingIn = false;
            state.user = action.payload.user;
        },
        signInUsernamePasswordFailed: (state, action: SignInUsernamePasswordFailed) => {
            state.signingIn = false;
            state.error = action.payload.message;
        },
        signOut: (state) => {
            state.signingOut = true;
        },
        signOutCompleted: (state) => {
            state.signingOut = false;
        },
        signOutFailed: (state, action: SignOutFailed) => {
            state.signingOut = false;
            state.error = action.payload.message;
        },
        setUser: (state, action: SetUser) => {
            state.user = action.payload.user;
        }
    }
})

export const {
    signInUsernamePassword,
    signInUsernamePasswordFailed,
    signInUsernamePasswordSuccess,
    signOut,
    signOutCompleted,
    signOutFailed,
    setUser
} = AuthSlice.actions

export default AuthSlice.reducer