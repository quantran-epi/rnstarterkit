import { ITask } from '@abstract/models/todo-list/ITask'
import { TodoListNavigatorParamsList } from '@modules/todo-list/navigation/Routes'
import { deleteTask, fetchTasks } from '@modules/todo-list/reducers/TaskReducer'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Button, FlatList, RefreshControl, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { Task } from './Task'

export const TaskList = () => {
    const dispatch = useDispatch()
    const { tasks, fetchingTasks, deletingTask } = useSelector((state: RootState) => state.TodoList.TaskReducer)
    const navigation = useNavigation<NativeStackNavigationProp<TodoListNavigatorParamsList>>();

    useEffect(() => {
        _refreshTasks()
    }, [])

    const _isLoading = (): boolean => fetchingTasks || deletingTask;
    const _refreshTasks = (): void => { dispatch(fetchTasks()) }

    const _onAddTask = (): void => {
        navigation.navigate("TodoList/TaskCreate")
    }

    const _onEditTask = (task: ITask): void => {
        navigation.navigate("TodoList/TaskEdit", {
            task: task
        })
    }

    const _onDeleteTask = (taskId: string): void => {
        dispatch(deleteTask({ taskId: taskId }))
    }

    return (
        <FlatList
            ListHeaderComponent={<View>
                <Button title="Add task" onPress={_onAddTask} />
            </View>}
            refreshControl={<RefreshControl refreshing={_isLoading()} onRefresh={_refreshTasks} />}
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Task
                key={item.id}
                data={item}
                onPress={_onEditTask}
                onDelete={_onDeleteTask} />}
        />
    )
}