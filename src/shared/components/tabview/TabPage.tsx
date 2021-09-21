import { Box } from '@components/box'
import { useStyles } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { ITabPageProps } from '.'

export const TabPage: FunctionComponent<ITabPageProps> = ({
    children,
    styles
}) => {
    const { theme } = useStyles()

    return (
        <Box styles={[theme.tabView.tabPage.values(), styles]}>
            {children}
        </Box>
    )
}