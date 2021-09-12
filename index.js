/**
 * @format
 */

import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification: (notification) => {
        console.log("NOTIFICATION", notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },  
    onAction: (notification) => {
        console.log('ACTION', notification)
    }
})

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
