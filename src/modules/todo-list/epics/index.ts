import { combineEpics } from 'redux-observable';
import { CreateTaskEpic } from './task/CreateTaskEpic';
import { DeleteTaskCompletedEpic } from './task/DeleteTaskCompletedEpic';
import { DeleteTaskEpic } from './task/DeleteTaskEpic';
import { FetchTasksEpic } from './task/FetchTasksEpic'
import { UpdateTaskEpic } from './task/UpdateTaskEpic';

const TodoListEpics = combineEpics(
    FetchTasksEpic,
    DeleteTaskEpic,
    DeleteTaskCompletedEpic,
    UpdateTaskEpic,
    CreateTaskEpic
)

export default TodoListEpics