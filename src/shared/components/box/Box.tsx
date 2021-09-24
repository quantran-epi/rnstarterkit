import { useStyles } from '@styles/base'
import React from 'react'
import { View } from 'react-native'
import { IBoxProps } from './IBox'

export const Box = React.forwardRef<View, IBoxProps>(({
    children,
    onLayout,
    styles
}, ref) => {
    const { theme } = useStyles()

    return <View ref={ref} style={[theme.box.values(), styles]} onLayout={onLayout}>
        {children}
    </View>
})