import { Observable, from, catchError, of } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { IEpicDependencies } from '@abstract/redux/IEpicDependencies';
import { RootState } from './../../../store';
import { IAction } from '@abstract/redux/IAction';
import { Epic, StateObservable } from 'redux-observable';
import { SignInUsernamePasswordCompleted, SignInUsernamePasswordFailed } from '../actions';
import { signInUsernamePassword, signInUsernamePasswordFailed, signInUsernamePasswordCompleted } from '../reducers/AuthReducer';
import { Logger } from '@utils/logger';

export const SignInUsernamePasswordEpic: Epic<IAction, SignInUsernamePasswordCompleted | SignInUsernamePasswordFailed, RootState, IEpicDependencies>
    = (action$: Observable<IAction>, state$: StateObservable<RootState>, { Services }) => {
        return action$.pipe(
            filter(signInUsernamePassword.match),
            switchMap(action => from(Services.Auth.SignInWithUsernamePassword(action.payload.Username, action.payload.Password)).pipe(
                map(user => signInUsernamePasswordCompleted({ user: user })),
                catchError(error => {
                    Logger.error(error);
                    return of(signInUsernamePasswordFailed({ message: "Failed to sign in" }))
                })
            ))
        )
    }