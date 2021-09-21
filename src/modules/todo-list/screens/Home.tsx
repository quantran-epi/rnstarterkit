import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { ScrollView } from 'react-native'
import { TodoListNavigatorParamList } from '../navigation/Routes';
import { Button } from '@components/button';

export const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<TodoListNavigatorParamList>>();

    return (
        <ScrollView style={{ flex: 1 }}>
            <Button fullwidth title="Go to Task Manager" onPress={() => navigation.navigate("TodoList/TaskManager")} />
            <Button fullwidth title="Go to Webview example" onPress={() => navigation.navigate("TodoList/WebviewExample")} />
            <Button fullwidth title="Go to Notification example" onPress={() => navigation.navigate("TodoList/NotificationExample")} />
            <Button fullwidth title="Go to Animation example" onPress={() => navigation.navigate("TodoList/AnimationExample")} />
            <Button fullwidth title="Go to FileSystem example" onPress={() => navigation.navigate("TodoList/FileSystemExample")} />
            <Button fullwidth title="Go to Chart example" onPress={() => navigation.navigate("TodoList/ChartExample")} />
            <Button fullwidth title="Go to Document picker example" onPress={() => navigation.navigate("TodoList/DocumentPickerExample")} />
            <Button fullwidth title="Go to Image cropper example" onPress={() => navigation.navigate("TodoList/ImageCropperExample")} />
            <Button fullwidth title="Go to Camera example" onPress={() => navigation.navigate("TodoList/CameraExample")} />
            <Button fullwidth title="Go to QRCode example" onPress={() => navigation.navigate("TodoList/QRCodeExample")} />
            <Button fullwidth title="Go to Map example" onPress={() => navigation.navigate("TodoList/MapExample")} />
            <Button fullwidth title="Go to BottomSheet example" onPress={() => navigation.navigate("TodoList/BottomSheetExample")} />
            <Button fullwidth title="Go to Carousel example" onPress={() => navigation.navigate("TodoList/CarouselExample")} />
            <Button fullwidth title="Go to Modal example" onPress={() => navigation.navigate("TodoList/ModalExample")} />
            <Button fullwidth title="Go to Swipeable example" onPress={() => navigation.navigate("TodoList/SwipeExample")} />
            <Button fullwidth title="Go to TabView example" onPress={() => navigation.navigate("TodoList/TabViewExample")} />
        </ScrollView>
    )
}