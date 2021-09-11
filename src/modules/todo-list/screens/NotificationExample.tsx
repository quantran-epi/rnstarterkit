import React from 'react'
import { Button, View } from 'react-native'
import PushNotification from 'react-native-push-notification'

export const NotificationExample = () => {

    const sendLocalNotification = () => {
        PushNotification.localNotification({
            id: 111,
            message: "test local notification"
        })
    }

    const cancelLocalNotification = () => {
        PushNotification.cancelLocalNotification("111")
    }

    const sendScheduledNotification = () => {
        PushNotification.scheduleLocalNotification({
            id: 222,
            message: "test scheduled notification",
            date: new Date(Date.now() + 5 * 1000)
        })
    }

    return (
        <View>
            <Button title="Send local notification" onPress={sendLocalNotification} />
            <Button title="Cancel local notification" onPress={cancelLocalNotification} />
            <Button title="Send scheduled notification" onPress={sendScheduledNotification} />
        </View>
    )
}