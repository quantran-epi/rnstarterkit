import { useStyles } from '@styles/base';
import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'
import { ITitleProps } from './ITitle'

export const Title: FunctionComponent<ITitleProps> = ({
    children,
    styles
}) => {
    const { theme } = useStyles();

    return <Text style={[styles]}>
        {children}
    </Text>
}