import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthorizedNavigator } from './AuthorizedNavigator';
import { RootNavigatorParamList } from './Routes';
import { AuthNavigator } from '@modules/auth/navigation/Navigator';
import { LoadingScreen } from './LoadingScreen';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"LoadingScreen"}>
            <Stack.Screen name={"LoadingScreen"} component={LoadingScreen}></Stack.Screen>
            <Stack.Screen name={"Auth"} component={AuthNavigator}></Stack.Screen>
            <Stack.Screen name={"Authorized"} component={AuthorizedNavigator}></Stack.Screen>
        </Stack.Navigator>
    )
}