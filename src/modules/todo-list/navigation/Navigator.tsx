import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { TodoListRoutes } from './RouteNames';
import { View } from 'react-native';
import { TodoListErrorHandler } from './ErrorHandler'

const Stack = createNativeStackNavigator();

export const TodoListNavigator = () => {
    return <View>
        <TodoListErrorHandler />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={TodoListRoutes.Home}>
            <Stack.Screen name={TodoListRoutes.Home} component={Home}></Stack.Screen>
        </Stack.Navigator>
    </View>
}