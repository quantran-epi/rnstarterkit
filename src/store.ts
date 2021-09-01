import { IAction } from './abstract/redux/IAction';
import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable'
import { rootReducer } from './rootReducer'
import { rootEpic } from './rootEpic'
import TaskServices from '@services/todo-list/TaskServices'
import { IEpicDependencies } from '@abstract/redux/IEpicDependencies'

const epicMiddleware: EpicMiddleware<IAction, IAction, any, IEpicDependencies> = createEpicMiddleware({
    dependencies: {
        Services: {
            Task: TaskServices
        }
    }
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
    devTools: true
})

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>
