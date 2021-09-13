import { Container } from '@components/container'
import React from 'react'
import * as Animatable from 'react-native-animatable';

export const AnimationExample = () => {
    return <Container>
        <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        <Animatable.Text animation="bounceInDown">Zoom me up, Scotty</Animatable.Text>
    </Container>
}