import { SignInWithGoogleEpic } from './SignInWithGoogleEpic';
import { SignOutEpic } from './SignOutEpic';
import { SignInUsernamePasswordEpic } from './SignInUsernamePasswordEpic';
import { combineEpics } from 'redux-observable';

const AuthEpics = combineEpics(
    SignInUsernamePasswordEpic,
    SignInWithGoogleEpic,
    SignOutEpic
)

export default AuthEpics;