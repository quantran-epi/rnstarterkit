import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TodoListNavigatorParamList } from './Routes';
import { Home } from '../screens/Home'
import { TaskEdit } from '../screens/TaskEdit';
import { TaskManager } from '../screens/TaskManager';
import { TaskCreate } from '../screens/TaskCreate';
import { WebviewExample } from '../screens/WebviewExample';
import { NotificationExample } from '../screens/NotificationExample';
import { AnimationExample } from '../screens/AnimationExample';
import { FileSystemExample } from '../screens/FileSystemExample';
import { ChartExample } from '../screens/ChartExample';
import { DocumentPickerExample } from '../screens/DocumentPickerExample';
import { ImageCropperExample } from '../screens/ImageCropperExample';
import { CameraExample } from '../screens/CameraExample';
import { QRCodeExample } from '../screens/QRCodeExample';
import { MapExample } from '../screens/MapExample';
import { SwipeExample } from '../screens/SwipeExample';
import { BottomSheetExample } from '../screens/BottomSheetExample';
import { CarouselExample } from '../screens/CarouselExample';
import { ModalExample } from '../screens/ModalExample';
import { TabViewExample } from '../screens/TabViewExample';

const Stack = createNativeStackNavigator<TodoListNavigatorParamList>();

export const TodoListNavigator = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"TodoList/Home"}>
        <Stack.Screen name={"TodoList/Home"} component={Home}></Stack.Screen>
        <Stack.Screen name={"TodoList/TaskEdit"} component={TaskEdit}></Stack.Screen>
        <Stack.Screen name={"TodoList/TaskCreate"} component={TaskCreate}></Stack.Screen>
        <Stack.Screen name={"TodoList/TaskManager"} component={TaskManager}></Stack.Screen>
        <Stack.Screen name={"TodoList/WebviewExample"} component={WebviewExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/NotificationExample"} component={NotificationExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/AnimationExample"} component={AnimationExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/FileSystemExample"} component={FileSystemExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/ChartExample"} component={ChartExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/DocumentPickerExample"} component={DocumentPickerExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/ImageCropperExample"} component={ImageCropperExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/CameraExample"} component={CameraExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/QRCodeExample"} component={QRCodeExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/MapExample"} component={MapExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/SwipeExample"} component={SwipeExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/BottomSheetExample"} component={BottomSheetExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/CarouselExample"} component={CarouselExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/ModalExample"} component={ModalExample}></Stack.Screen>
        <Stack.Screen name={"TodoList/TabViewExample"} component={TabViewExample}></Stack.Screen>
    </Stack.Navigator>
}