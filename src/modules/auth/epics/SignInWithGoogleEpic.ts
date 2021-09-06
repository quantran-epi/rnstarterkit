import { Observable, from, of, catchError } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';
import { IEpicDependencies } from '@abstract/redux/IEpicDependencies';
import { RootState } from 'src/store';
import { SignInWithGoogleFailed, SignInWithGoogleCompleted } from './../actions/SignInWithGoogleActions';
import { IAction } from '@abstract/redux';
import { Epic, StateObservable } from 'redux-observable';
import { signInWithGoogle, signInWithGoogleCompleted, signInWithGoogleFailed } from '../reducers/AuthReducer';
import { Logger } from '@utils/logger';

export const SignInWithGoogleEpic: Epic<IAction, SignInWithGoogleCompleted | SignInWithGoogleFailed, RootState, IEpicDependencies>
    = (action$: Observable<IAction>, state$: StateObservable<RootState>, { Services }) => {
        return action$.pipe(
            filter(signInWithGoogle.match),
            switchMap(() => from(Services.Auth.SignInWithGoogle()).pipe(
                map(user => signInWithGoogleCompleted({ user: user })),
                catchError(error => {
                    Logger.error(error);
                    return of(signInWithGoogleFailed({ message: "Failed to sign in" }))
                })
            ))
        )
    }