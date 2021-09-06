import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Button } from 'react-native'
import { TodoListNavigatorParamList } from '../navigation/Routes';

export const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<TodoListNavigatorParamList>>();
    return (
        <Button title="Go to Task Manager" onPress={() => navigation.navigate("TodoList/TaskManager")} />
    )
}