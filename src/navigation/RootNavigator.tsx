import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ModuleNavigator } from './ModuleNavigator';
import { RootNavigatorParamList } from './Routes';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Modules"}>
        <Stack.Screen name={"Modules"} component={ModuleNavigator}></Stack.Screen>
    </Stack.Navigator>
)