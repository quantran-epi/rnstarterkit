import { combineEpics } from 'redux-observable';
import { FetchTasksEpic } from './task/FetchTasksEpic'

const TodoListEpics = combineEpics(
    FetchTasksEpic
)

export default TodoListEpics