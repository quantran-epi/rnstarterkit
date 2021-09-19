import React, { FunctionComponent } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { IScrollable } from '.'

export const Scrollable: FunctionComponent<IScrollable> = ({
    children,
    styles,
    innerScrollViewProps
}) => {
    return (
        <ScrollView style={[styles]} {...innerScrollViewProps}>
            {children}
        </ScrollView>
    )
}