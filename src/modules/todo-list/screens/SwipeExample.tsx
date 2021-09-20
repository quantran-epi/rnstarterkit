import { Box } from '@components/box'
import { Container } from '@components/container'
import { Swipeable } from '@components/swipeable'
import React from 'react'
import { Dimensions, Text } from 'react-native'

export const SwipeExample = () => {

    return (
        <Container>
            <Swipeable
                styles={{ width: Dimensions.get('window').width, height: 300 }}
                directions={["left", "right", "up"]}
                onSwipeRight={() => console.log('swipe right')}
                onSwipeLeft={() => console.log('swipe left')}
                onSwipeUp={() => console.log('swipe up')}>
                <Box styles={{ flex: 1, backgroundColor: 'gray' }}>
                    <Text>Swipe me!</Text>
                </Box>
            </Swipeable>
        </Container>
    )
}