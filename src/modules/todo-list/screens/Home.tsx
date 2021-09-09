import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Button, View } from 'react-native'
import { TodoListNavigatorParamList } from '../navigation/Routes';

export const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<TodoListNavigatorParamList>>();
    return (
        <View>
            <Button title="Go to Task Manager" onPress={() => navigation.navigate("TodoList/TaskManager")} />
            <Button title="Go to Webview example" onPress={() => navigation.navigate("TodoList/WebviewExample")} />
        </View>
    )
}