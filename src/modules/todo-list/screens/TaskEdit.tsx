import { ITask } from '@abstract/models/todo-list/ITask';
import { TodoListNavigatorParamList } from '@modules/todo-list/navigation/Routes';
import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { TaskForm } from '../components/TaskForm'
import { updateTask } from '../reducers/TaskReducer';

export const TaskEdit = () => {
    const dispatch = useDispatch();
    const { params } = useRoute<RouteProp<TodoListNavigatorParamList, "TodoList/TaskEdit">>();

    const onSave = (task: ITask): void => {
        dispatch(updateTask({ task: task }))
    }

    return (
        <TaskForm data={params.task} onSave={onSave} />
    )
}