import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { fetchTasks } from '../reducers/TaskReducer'

export const Home = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state: RootState) => state.TodoList.TaskReducer.tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    return (
        <View>
        </View>
    )
}