import { Container } from '@components/container';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Button } from 'react-native'
import { TodoListNavigatorParamList } from '../navigation/Routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<TodoListNavigatorParamList>>();

    return (
        <Container>
            <Button title="Go to Task Manager" onPress={() => navigation.navigate("TodoList/TaskManager")} />
            <Button title="Go to Webview example" onPress={() => navigation.navigate("TodoList/WebviewExample")} />
            <Button title="Go to Notification example" onPress={() => navigation.navigate("TodoList/NotificationExample")} />
            <Button title="Go to Animation example" onPress={() => navigation.navigate("TodoList/AnimationExample")} />
            <Button title="Go to FileSystem example" onPress={() => navigation.navigate("TodoList/FileSystemExample")} />
            <Icon name="access-point-network" size={32} />
        </Container>
    )
}