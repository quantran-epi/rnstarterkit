import { combineEpics } from 'redux-observable'
import TodoListEpics from '@modules/todo-list/epics'

const rootEpic = combineEpics(
    TodoListEpics
)

export {
    rootEpic
}