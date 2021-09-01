import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ModuleRoutes } from '@navigation/RouteNames'
import { TodoListNavigator } from '@modules/todo-list/navigation/Navigator'

const Drawer = createDrawerNavigator();

export const ModuleNavigator = () => (
    <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName={ModuleRoutes.TodoList}>
        <Drawer.Screen name={ModuleRoutes.TodoList} component={TodoListNavigator}></Drawer.Screen>
    </Drawer.Navigator>
)