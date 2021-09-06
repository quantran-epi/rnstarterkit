import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer'
import { TodoListNavigator } from '@modules/todo-list/navigation/Navigator'
import { AuthorizedNavigatorParamList, RootNavigatorParamList } from './Routes';
import { Button, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '@modules/auth/reducers/AuthReducer';
import { RootState } from 'src/store';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator<AuthorizedNavigatorParamList>();

const DrawerContent = (props: DrawerContentComponentProps) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.Auth.user)

    const onSignOut = () => {
        dispatch(signOut())
    }

    return (
        <ScrollView>
            {user && <Text>Welcome {user.userName}</Text>}
            {user && <Button title="Sign out" onPress={onSignOut} />}
        </ScrollView>
    )
}

export const AuthorizedNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props => <DrawerContent {...props} />)} screenOptions={{ headerShown: false }} initialRouteName={"Authorized/TodoList"}>
            <Drawer.Screen name={"Authorized/TodoList"} component={TodoListNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}