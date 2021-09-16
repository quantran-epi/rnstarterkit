import { Container } from '@components/container'
import React, { useRef, useState } from 'react'
import { Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

export const CameraExample = () => {
    const camera = useRef<RNCamera | null>();
    const [type, setType] = useState(RNCamera.Constants.Type.back)

    const takePicture = async () => {
        if (camera.current) {
            const options = { quality: 0.5 };
            const data = await camera.current.takePictureAsync(options);
            console.log(data);
        }
    };

    const switchType = () => {
        switch (type) {
            case RNCamera.Constants.Type.back: setType(RNCamera.Constants.Type.front); break;
            case RNCamera.Constants.Type.front: setType(RNCamera.Constants.Type.back); break;
            default: setType(RNCamera.Constants.Type.back);
        }
    }

    return (
        <Container>
            <RNCamera
                style={{ flex: 1 }}
                ref={ref => camera.current = ref}
                type={type}
            />
            <Button title="Capture" onPress={takePicture} />
            <Button title="Switch type" onPress={switchType} />
        </Container>
    )
}