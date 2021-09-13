import { useStyles } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'
import { IParagraphProps } from '.'

export const Paragraph: FunctionComponent<IParagraphProps> = ({
    children,
    styles
}) => {
    const { theme } = useStyles();

    return <Text style={[theme.paragraph.values(), styles]}>
        {children}
    </Text>
}