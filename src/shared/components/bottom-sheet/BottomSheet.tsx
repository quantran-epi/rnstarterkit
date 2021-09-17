import React from 'react'
import { IBottomSheetProps } from './IBottomSheet'
import OriginalBottomSheet from 'reanimated-bottom-sheet'
import BottomSheetBehavior from 'reanimated-bottom-sheet'
import { Container } from '@components/container'
import { useStyles } from '@styles/base'
import { ScrollView } from 'react-native-gesture-handler'
import { Box } from '@components/box'

export const BottomSheet = React.forwardRef<BottomSheetBehavior, IBottomSheetProps>(({
    children,
    snapPoints,
    headerContent,
    headerStyles,
    contentContainerStyle,
    headerHandleComponent
}, ref) => {
    const { theme } = useStyles();

    const defaultHeaderHandle = (): React.ReactNode => {
        return <Box styles={[theme.bottomSheet.headerHandle.values()]}></Box>
    }

    const renderHeaderHandle = (): React.ReactNode => {
        return headerHandleComponent || defaultHeaderHandle();
    }

    const renderContent = (): React.ReactNode => {
        return <ScrollView contentContainerStyle={[theme.bottomSheet.contentContainer.values(), contentContainerStyle]}>
            {children}
        </ScrollView>
    }

    const renderHeader = (): React.ReactNode => {
        return <Container styles={[theme.bottomSheet.headerContainer.values(), headerStyles]}>
            {renderHeaderHandle()}
            {headerContent}
        </Container>;
    }

    return (
        <OriginalBottomSheet
            ref={ref}
            snapPoints={snapPoints}
            renderContent={renderContent}
            renderHeader={renderHeader}
        />
    )
})

