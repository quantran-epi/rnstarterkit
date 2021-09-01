import { FetchTasksCompletedAction, FetchTasksFailedAction } from './../actions/task/FetchTasksAction';
import { ITask } from '@abstract/models/todo-list/ITask';
import { createSlice } from '@reduxjs/toolkit'

interface ITaskState {
    tasks: Array<ITask>;
    fetchingTasks: boolean;
    error?: string;
}

const initialState: ITaskState = {
    tasks: [],
    fetchingTasks: false
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
        }
    }
})

export const {
    fetchTasks,
    fetchTasksCompleted,
    fetchTasksFailed
} = TaskSlice.actions
export default TaskSlice.reducer;