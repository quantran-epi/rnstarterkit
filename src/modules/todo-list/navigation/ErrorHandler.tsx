import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

export const TodoListErrorHandler = () => {
    const taskError = useSelector((state: RootState) => state.TodoList.TaskReducer.error)

    useEffect(() => {
        if (taskError) Alert.alert(taskError);
    }, [taskError])

    return null
}