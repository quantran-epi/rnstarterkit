import { useStyles } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { IBoxProps } from './IBox'

export const Box: FunctionComponent<IBoxProps> = ({
    children,
    onLayout,
    styles
}) => {
    const { theme } = useStyles()

    return <View style={[theme.box.values(), styles]} onLayout={onLayout}>
        {children}
    </View>
}