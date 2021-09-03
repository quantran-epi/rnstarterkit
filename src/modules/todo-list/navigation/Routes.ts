import { ITask } from "@abstract/models/todo-list/ITask"

export type TodoListNavigatorParamsList = {
    "TodoList/Home": undefined,
    "TodoList/TaskEdit": { task: ITask },
    "TodoList/TaskCreate": undefined,
    "TodoList/TaskManager": undefined,
}