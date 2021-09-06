import { TodoListReducer } from '@modules/todo-list/reducers/TodoListReducer';
import AuthReducer from '@modules/auth/reducers/AuthReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    TodoList: TodoListReducer,
    Auth: AuthReducer
});

export {
    rootReducer
}