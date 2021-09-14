import { Container } from '@components/container'
import React, { useEffect } from 'react'
import { Alert, Button, PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';

export const FileSystemExample = () => {

    useEffect(() => {
        requestExternalStoratePermission();
    }, [])

    const requestExternalStoratePermission = async () => {
        let granted = await PermissionsAndroid.request(
            "android.permission.READ_EXTERNAL_STORAGE",
            {
                title: "External storage",
                message: "App needs access to your storage",
                buttonPositive: "OK",
                buttonNeutral: "Later",
                buttonNegative: "Cancel"
            }
        )

        if (granted === "granted")
            console.log("You can use storage")
        else
            console.log("Storage permission denied")
    }

    const writeTestFile = async () => {
        let canWrite = await PermissionsAndroid.check("android.permission.READ_EXTERNAL_STORAGE");
        if (canWrite)
            RNFS.writeFile(RNFS.DownloadDirectoryPath + '/test.txt', 'Lorem ipsum dolor sit amet', 'utf8')
                .then(success => console.log('FILE WRITTEN!'))
                .catch(err => console.log(err.message));
        else Alert.alert("Write permission needed")
    }

    const readTestFile = async () => {
        let canRead = await PermissionsAndroid.check("android.permission.READ_EXTERNAL_STORAGE");
        if (canRead)
            RNFS.readFile(RNFS.DownloadDirectoryPath + '/test.txt','utf8')
                .then(value => console.log(value))
                .catch(error => console.log(error.message))
        else Alert.alert("Read permission needed")
    }

    return (
        <Container>
            <Button title="Write test.txt" onPress={writeTestFile} />
            <Button title="Read test.txt" onPress={readTestFile} />
        </Container>
    )
}