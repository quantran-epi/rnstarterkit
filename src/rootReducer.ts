import { TodoListReducer } from '@modules/todo-list/reducers/TodoListReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    TodoList: TodoListReducer
});

export {
    rootReducer
}