import { Box } from '@components/box'
import { useStyles } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { IModalFooterProps } from '.'

export const ModalFooter: FunctionComponent<IModalFooterProps> = ({
    children,
    styles
}) => {
    const { theme } = useStyles()

    return (
        <Box styles={[theme.modal.footer.values(), styles]}>
            {children}
        </Box>
    )
}