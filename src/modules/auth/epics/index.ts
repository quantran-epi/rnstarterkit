import { SignOutEpic } from './SignOutEpic';
import { SignInUsernamePasswordEpic } from './SignInUsernamePasswordEpic';
import { combineEpics } from 'redux-observable';

const AuthEpics = combineEpics(
    SignInUsernamePasswordEpic,
    SignOutEpic
)

export default AuthEpics;