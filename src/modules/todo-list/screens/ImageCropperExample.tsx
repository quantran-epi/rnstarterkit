import { Container } from '@components/container'
import React from 'react'
import { Alert, Button, PermissionsAndroid } from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import DocumentPicker from 'react-native-document-picker'

export const ImageCropperExample = () => {
    const openFromFiles = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            })
            let image = res[0];
            if (image)
                ImageCropPicker.openCropper({
                    cropperToolbarTitle: "Image Cropper",
                    path: image.uri,
                    mediaType: "photo",
                })
        } catch (err: any) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err
            }
        }
    }

    const openFromCamera = async () => {
        let granted = await PermissionsAndroid.request("android.permission.CAMERA");
        if (granted === "granted")
            ImageCropPicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
                freeStyleCropEnabled: true,
                cropperToolbarTitle: "Image Cropper"
            }).then(image => {
                console.log(image);
            });
        else Alert.alert("Camera permission denied")
    }

    return (
        <Container>
            <Button title="Open from files" onPress={openFromFiles} />
            <Button title="Open from camera" onPress={openFromCamera} />
        </Container>
    )
}