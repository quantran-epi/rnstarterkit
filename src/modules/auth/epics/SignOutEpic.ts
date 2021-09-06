import { from, Observable, catchError, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IEpicDependencies } from '@abstract/redux/IEpicDependencies';
import { RootState } from './../../../store';
import { IAction } from '@abstract/redux';
import { Epic, StateObservable } from 'redux-observable';
import { SignOutCompleted, SignOutFailed } from '../actions';
import { signOut, signOutCompleted, signOutFailed } from '../reducers/AuthReducer';
import { Logger } from '@utils/logger';

export const SignOutEpic: Epic<IAction, SignOutCompleted | SignOutFailed, RootState, IEpicDependencies>
    = (action$: Observable<IAction>, state$: StateObservable<RootState>, { Services }) => {
        return action$.pipe(
            filter(signOut.match),
            switchMap(() => from(Services.Auth.SignOut()).pipe(
                map(() => signOutCompleted()),
                catchError(error => {
                    Logger.error(error);
                    return of(signOutFailed({ message: "Failed to sign out" }))
                })
            ))
        )
    }