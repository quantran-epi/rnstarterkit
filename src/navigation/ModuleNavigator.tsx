import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TodoListNavigator } from '@modules/todo-list/navigation/Navigator'
import { ModuleNavigatorParamList } from './Routes';

const Drawer = createDrawerNavigator<ModuleNavigatorParamList>();

export const ModuleNavigator = () => (
    <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Modules/TodoList"}>
        <Drawer.Screen name={"Modules/TodoList"} component={TodoListNavigator}></Drawer.Screen>
    </Drawer.Navigator>
)