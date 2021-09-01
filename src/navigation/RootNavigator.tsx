import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootRoutes } from '@navigation/RouteNames';
import { ModuleNavigator } from './ModuleNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={RootRoutes.Modules}>
        <Stack.Screen name={RootRoutes.Modules} component={ModuleNavigator}></Stack.Screen>
    </Stack.Navigator>
)