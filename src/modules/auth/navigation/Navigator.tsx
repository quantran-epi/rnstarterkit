import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthNavigatorParamList } from './Routes'
import { Login } from '../screens/Login'
import { BackHandler } from 'react-native'

const Stack = createNativeStackNavigator<AuthNavigatorParamList>()

export const AuthNavigator = () => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => { BackHandler.exitApp(); return true; }
        );
        return () => {
            backHandler.remove();
        }
    }, [])

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth/Login">
            <Stack.Screen name="Auth/Login" component={Login}></Stack.Screen>
        </Stack.Navigator>
    )
}