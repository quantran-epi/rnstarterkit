import React from 'react'
import { Button, View } from 'react-native'
import PushNotification from 'react-native-push-notification'

export const NotificationExample = () => {

    const sendLocalNotification = () => {
        PushNotification.localNotification({
            id: 111,
            message: "test local notification",
            actions: ['ok', 'cancel'],
            bigPictureUrl: "https://cdnimg.vietnamplus.vn/t1200/Uploaded/mzdic/2021_02_03/manchester-united-9-0-1-0302.jpg",
        })
    }

    const cancelLocalNotification = () => {
        PushNotification.cancelLocalNotification("111")
    }

    const sendScheduledNotification = () => {
        PushNotification.localNotificationSchedule({
            id: 222,
            message: "test scheduled notification",
            date: new Date(Date.now() + 5 * 1000),
        })
    }

    return (
        <View>
            <Button title="Local notification" onPress={sendLocalNotification} />
            <Button title="Cancel local notification" onPress={cancelLocalNotification} />
            <Button title="Scheduled notification" onPress={sendScheduledNotification} />
        </View>
    )
}