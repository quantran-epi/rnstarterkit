import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer'
import { TodoListNavigator } from '@modules/todo-list/navigation/Navigator'
import { AuthorizedNavigatorParamList, RootNavigatorParamList } from './Routes';
import { Alert, BackHandler, Button, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '@modules/auth/reducers/AuthReducer';
import { RootState } from 'src/store';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator<AuthorizedNavigatorParamList>();

const DrawerContent = (props: DrawerContentComponentProps) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.Auth.user)
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>()

    const onSignOut = () => {
        dispatch(signOut())
        navigation.navigate("Auth");
    }

    return (
        <ScrollView>
            {user && <Text>Welcome {user.userName}</Text>}
            {user && <Button title="Sign out" onPress={onSignOut} />}
        </ScrollView>
    )
}

export const AuthorizedNavigator = () => {
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
        <Drawer.Navigator drawerContent={(props => <DrawerContent {...props} />)} screenOptions={{ headerShown: false }} initialRouteName={"Authorized/TodoList"}>
            <Drawer.Screen name={"Authorized/TodoList"} component={TodoListNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}