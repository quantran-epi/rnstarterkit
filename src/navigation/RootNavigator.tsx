import React, { useEffect } from 'react'
import { AuthorizedNavigator } from './AuthorizedNavigator';
import { RootNavigatorParamList } from './Routes';
import { AuthNavigator } from '@modules/auth/navigation/Navigator';
import { SplashScreen } from './SplashScreen';
import { BottomTabBarProps, BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { setUser } from '@modules/auth/reducers/AuthReducer';
import { AuthServiceHelpers } from '@services/auth/AuthServices';
import auth from '@react-native-firebase/auth';
import { GlobalErrorHandler } from '../ErrorHandler';
import { RootState } from 'src/store';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

const Tab = createBottomTabNavigator<RootNavigatorParamList>();

const CustomTabBar = (props: BottomTabBarProps) => {
    const dispatch = useDispatch();

    const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        dispatch(setUser({ user: user ? AuthServiceHelpers.MapFirebaseUserToIUser(user) : undefined }))
    }

    const onRemoteMessage = async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        console.log("foreground message: ", remoteMessage)
    }

    useEffect(() => {
        const authUnsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
        const messagingUnsubscribe = messaging().onMessage(onRemoteMessage);
        return () => {
            authUnsubscribe();
            messagingUnsubscribe();
        };
    }, [])

    return <React.Fragment>
        <GlobalErrorHandler />
    </React.Fragment>;
}

export const RootNavigator = () => {
    const navigation = useNavigation<BottomTabNavigationProp<RootNavigatorParamList>>();
    const user = useSelector((state: RootState) => state.Auth.user)
    const isAppReady = useSelector((state: RootState) => state.Global.isAppReady)

    useEffect(() => {
        if (!isAppReady) return;
        if (user) navigation.navigate("Authorized");
        else navigation.navigate("Auth");
    }, [user, isAppReady])

    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}
            initialRouteName={"SplashScreen"}>
            {!isAppReady && <Tab.Screen name={"SplashScreen"} component={SplashScreen}></Tab.Screen>}
            {!user && <Tab.Screen name={"Auth"} component={AuthNavigator}></Tab.Screen>}
            {user && <Tab.Screen name={"Authorized"} component={AuthorizedNavigator}></Tab.Screen>}
        </Tab.Navigator>
    )
}