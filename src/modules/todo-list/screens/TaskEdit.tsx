import { ITask } from '@abstract/models/todo-list/ITask';
import { TodoListNavigatorParamsList } from '@modules/todo-list/navigation/Routes';
import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { TaskForm } from '../components/TaskForm'
import { updateTask } from '../reducers/TaskReducer';

export const TaskEdit = () => {
    const dispatch = useDispatch();
    const { params } = useRoute<RouteProp<TodoListNavigatorParamsList, "TodoList/TaskEdit">>();

    const onSave = (task: ITask): void => {
        dispatch(updateTask({ task: task }))
    }

    return (
        <TaskForm data={params.task} onSave={onSave} />
    )
}