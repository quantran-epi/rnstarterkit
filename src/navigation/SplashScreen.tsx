import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAppReady } from '../rootReducer';

export const SplashScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //example time comsuming task
        setTimeout(() => {
            dispatch(setAppReady({ isReady: true }));
        }, 2000)
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator />
        </View>
    )
}