import { Box } from '@components/box'
import React, { FunctionComponent } from 'react'
import { IDroppableProps } from './IDroppable'

export const Droppable: FunctionComponent<IDroppableProps> = ({
    children
}) => {
    return (
        <Box>
            {children}
        </Box>
    )
}