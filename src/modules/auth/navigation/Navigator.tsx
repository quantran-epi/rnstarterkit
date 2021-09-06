import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthNavigatorParamList } from './Routes'
import { Login } from '../screens/Login'

const Stack = createNativeStackNavigator<AuthNavigatorParamList>()

export const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth/Login">
            <Stack.Screen name="Auth/Login" component={Login}></Stack.Screen>
        </Stack.Navigator>
    )
}