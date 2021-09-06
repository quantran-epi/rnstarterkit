import { combineEpics } from 'redux-observable'
import TodoListEpics from '@modules/todo-list/epics'
import AuthEpics from '@modules/auth/epics'

const rootEpic = combineEpics(
    AuthEpics,
    TodoListEpics,
)

export {
    rootEpic
}