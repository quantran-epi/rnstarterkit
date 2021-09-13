import { useStyles } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { IContainerProps } from './IContainer'

export const Container: FunctionComponent<IContainerProps> = ({
    children,
    styles
}) => {
    const { theme } = useStyles();

    return <View style={[theme.container.values(), styles]}>
        {children}
    </View>
}