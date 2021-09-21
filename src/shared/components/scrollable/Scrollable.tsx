import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { IScrollableProps } from './IScrollable'

export const Scrollable = React.forwardRef<ScrollView, IScrollableProps>(({
    children,
    styles,
    horizontal,
    innerScrollViewProps
}, ref) => {
    return (
        <ScrollView ref={ref} style={[styles]} horizontal={horizontal} {...innerScrollViewProps}>
            {children}
        </ScrollView>
    )
})
