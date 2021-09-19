import { Box } from '@components/box'
import { Button } from '@components/button'
import { useStyles } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { IModalHeaderToolProps } from '.'

export const ModalHeaderTool: FunctionComponent<IModalHeaderToolProps> = ({
    component,
    icon,
    title,
    onPress
}) => {
    const { theme } = useStyles()

    const onToolPress = () => {
        if (onPress) onPress();
    }

    return (
        <Box styles={[theme.modal.headerTool.values()]}>
            {component || <Button title={title} icon={icon} onPress={onToolPress} />}
        </Box>
    )
}