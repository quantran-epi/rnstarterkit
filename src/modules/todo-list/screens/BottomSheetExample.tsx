import { BottomSheet } from '@components/bottom-sheet'
import { Box } from '@components/box'
import { Container } from '@components/container'
import React, { useRef } from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const BottomSheetExample = () => {
    const bottomSheetRef = useRef(null)

    const renderHeaderContent = () => {
        return <Container styles={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            {new Array(3).fill(1).map((e, i) =>
                <Box styles={{ flexDirection: 'row' }} key={i}>
                    <Icon name="account-cog" size={24}></Icon>
                    <Text>Item {i}</Text>
                </Box>)}
        </Container>
    }

    return (
        <Container>
            <BottomSheet
                snapPoints={[70, 500]}
                ref={bottomSheetRef}
                headerContent={renderHeaderContent()}>
                {new Array(50).fill(1).map((e, i) => <Text key={i}>bottom sheet content {i}</Text>)}
            </BottomSheet>
        </Container>
    )
}
