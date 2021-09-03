import { CreateTask, CreateTaskFailed, FetchTasksCompletedAction, FetchTasksFailedAction, UpdateTask, UpdateTaskCompleted, UpdateTaskFailed }
    from '@modules/todo-list/actions/task';
import { ITask } from '@abstract/models/todo-list/ITask';
import { createSlice } from '@reduxjs/toolkit'
import { DeleteTask, DeleteTaskFailed } from '../actions/task/DeleteTaskActions';

interface ITaskState {
    tasks: Array<ITask>;
    fetchingTasks: boolean;
    creatingTask: boolean;
    updatingTask: boolean;
    deletingTask: boolean;
    error?: string;
    alert?: string;
}

const initialState: ITaskState = {
    tasks: [],
    fetchingTasks: false,
    creatingTask: false,
    updatingTask: false,
    deletingTask: false,
}

const TaskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        fetchTasks: (state) => {
            state.fetchingTasks = true;
        },
        fetchTasksCompleted: (state, action: FetchTasksCompletedAction) => {
            state.tasks = action.payload.tasks;
            state.fetchingTasks = false;
        },
        fetchTasksFailed: (state, action: FetchTasksFailedAction) => {
            state.fetchingTasks = false;
            state.error = action.payload.message;
        },
        deleteTask: (state, action: DeleteTask) => {
            state.deletingTask = true;
        },
        deleteTaskCompleted: (state) => {
            state.deletingTask = false;
        },
        deleteTaskFailed: (state, action: DeleteTaskFailed) => {
            state.deletingTask = false;
            state.error = action.payload.message;
        },
        updateTask: (state, action: UpdateTask) => {
            state.updatingTask = true;
        },
        updateTaskCompleted: (state, action: UpdateTaskCompleted) => {
            state.updatingTask = false;
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.task.id)
                    return action.payload.task;
                return task;
            })
        },
        updateTaskFailed: (state, action: UpdateTaskFailed) => {
            state.updatingTask = false;
            state.error = action.payload.message;
        },
        createTask: (state, action: CreateTask) => {
            state.creatingTask = true;
        },
        createTaskCompleted: (state) => {
            state.creatingTask = false;
        },
        createTaskFailed: (state, action: CreateTaskFailed) => {
            state.creatingTask = false;
            state.error = action.payload.message;
        },
    }
})

export const {
    fetchTasks,
    fetchTasksCompleted,
    fetchTasksFailed,
    deleteTask,
    deleteTaskCompleted,
    deleteTaskFailed,
    updateTaskFailed,
    updateTask,
    updateTaskCompleted,
    createTask,
    createTaskCompleted,
    createTaskFailed
} = TaskSlice.actions
export default TaskSlice.reducer;