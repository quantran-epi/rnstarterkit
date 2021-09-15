import { ITask } from "@abstract/models/todo-list/ITask"

export type TodoListNavigatorParamList = {
    "TodoList/Home": undefined,
    "TodoList/TaskEdit": { task: ITask },
    "TodoList/TaskCreate": undefined,
    "TodoList/TaskManager": undefined,
    "TodoList/WebviewExample": undefined,
    "TodoList/NotificationExample": undefined,
    "TodoList/AnimationExample": undefined,
    "TodoList/FileSystemExample": undefined,
    "TodoList/ChartExample": undefined,
}