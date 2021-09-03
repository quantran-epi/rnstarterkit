import { ITask } from '@abstract/models/todo-list/ITask'
import React from 'react'
import { useDispatch } from 'react-redux'
import { TaskForm } from '../components/TaskForm'
import { createTask } from '../reducers/TaskReducer'

export const TaskCreate = () => {
    const dispatch = useDispatch();

    const onSave = (task: ITask): void => {
        dispatch(createTask({ task: task }))
    }

    return (
        <TaskForm onSave={onSave} />
    )
}