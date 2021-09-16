import { Container } from '@components/container'
import React from 'react'
import { Text } from 'react-native';
import { BarCodeReadEvent } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const QRCodeExample = () => {

    const onRead = (e: BarCodeReadEvent) => {
        console.log(e)
    }

    return (
        <Container>
            <QRCodeScanner
                onRead={onRead}
                topContent={
                    <Text style={{
                        flex: 1,
                        fontSize: 18,
                        padding: 32,
                        color: '#777'
                    }}>
                        Scan the code
                    </Text>
                }
            />
        </Container>
    )
}