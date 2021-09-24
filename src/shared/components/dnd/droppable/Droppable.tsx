import { Box } from '@components/box'
import React, { FunctionComponent } from 'react'
import { LayoutChangeEvent } from 'react-native'
import { IDroppableProps } from './IDroppable'

export const Droppable: FunctionComponent<IDroppableProps> = ({
    children,
    handler,
    styles
}) => {

    const onLayout = (layout: LayoutChangeEvent) => {
        handler.setLayout(layout.nativeEvent.layout)
    }
    
    return (
        <Box onLayout={onLayout} styles={[styles]}>
            {children}
        </Box>
    )
}