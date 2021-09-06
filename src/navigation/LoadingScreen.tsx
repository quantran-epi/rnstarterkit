import { setUser } from '@modules/auth/reducers/AuthReducer';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigatorParamList } from './Routes';

export const LoadingScreen = () => {
    const [initializing, setInitializing] = useState<boolean>(true);
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
    const dispatch = useDispatch();

    const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        if (initializing) setInitializing(false);
        dispatch(setUser({ user: user ? { userName: user.email || "" } : undefined }))
        
        if (user) navigation.navigate("Authorized")
        else navigation.navigate("Auth")
    }

    useEffect(() => {
        const subscription = auth().onAuthStateChanged(onAuthStateChanged);
        return subscription;
    }, [])

    if (initializing) return null;
    return (
        <ActivityIndicator />
    )
}