import { createSlice } from '@reduxjs/toolkit';
import { TodoListReducer } from '@modules/todo-list/reducers/TodoListReducer';
import AuthReducer from '@modules/auth/reducers/AuthReducer';
import { combineReducers } from 'redux'
import { IPayloadAction } from '@abstract/redux';

interface IGlobalState {
    isAppReady: boolean;
}

const initialGlobalState: IGlobalState = {
    isAppReady: false
}

const GlobalSlice = createSlice({
    name: "global",
    initialState: initialGlobalState,
    reducers: {
        setAppReady: (state, action: IPayloadAction<{ isReady: boolean }>) => {
            state.isAppReady = action.payload.isReady;
        }
    }
})

const rootReducer = combineReducers({
    Global: GlobalSlice.reducer,
    TodoList: TodoListReducer,
    Auth: AuthReducer
});

export {
    rootReducer
}

export const {
    setAppReady
} = GlobalSlice.actions