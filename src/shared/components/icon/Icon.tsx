import React, { FunctionComponent } from 'react'
import { IIconProps } from './IIcon'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useStyles } from '@styles/base'

export const Icon: FunctionComponent<IIconProps> = ({
    name,
    color,
    size
}) => {
    const { theme } = useStyles()

    return (
        <MaterialIcon name={name} size={size || theme.icon.values().size} color={color} />
    )
}