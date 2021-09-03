import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TodoListNavigatorParamsList } from './Routes';
import { Home } from '../screens/Home'
import { TaskEdit } from '../screens/TaskEdit';
import { TaskManager } from '../screens/TaskManager';
import { TaskCreate } from '../screens/TaskCreate';

const Stack = createNativeStackNavigator<TodoListNavigatorParamsList>();

export const TodoListNavigator = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"TodoList/Home"}>
        <Stack.Screen name={"TodoList/Home"} component={Home}></Stack.Screen>
        <Stack.Screen name={"TodoList/TaskEdit"} component={TaskEdit}></Stack.Screen>
        <Stack.Screen name={"TodoList/TaskCreate"} component={TaskCreate}></Stack.Screen>
        <Stack.Screen name={"TodoList/TaskManager"} component={TaskManager}></Stack.Screen>
    </Stack.Navigator>
}