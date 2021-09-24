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
    "TodoList/DocumentPickerExample": undefined,
    "TodoList/ImageCropperExample": undefined,
    "TodoList/CameraExample": undefined,
    "TodoList/QRCodeExample": undefined,
    "TodoList/MapExample": undefined,
    "TodoList/SwipeExample": undefined,
    "TodoList/BottomSheetExample": undefined,
    "TodoList/CarouselExample": undefined,
    "TodoList/ModalExample": undefined,
    "TodoList/TabViewExample": undefined,
    "TodoList/DndExample": undefined,
}