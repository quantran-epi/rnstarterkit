import { Title } from '@components/title'
import React, { FunctionComponent } from 'react'
import { TextStyle, TouchableHighlight, ViewStyle } from 'react-native'
import { IButtonProps } from './IButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useStyles } from '@styles/base'

export const Button: FunctionComponent<IButtonProps> = ({
    title,
    onPress,
    icon,
    styles,
    titleStyles,
    iconStyles,
    disabled = false,
    iconPlacement = "left",
    variant = "primary"
}) => {
    const { theme } = useStyles();
    const {
        backgroundColor: containerBackgroundColor,
        underlayColor: containerUndelayColor,
        ...otherContainerStyles
    } = theme.button.container.values(variant);
    const {
        color: titleColor,
        ...otherTitleStyle
    } = theme.button.title.values(variant);
    const {
        color: iconColor,
        ...otherIconStyle
    } = theme.button.icon.values(variant);

    const innerContainerStyles = (): ViewStyle => {
        let buttonStyles = {} as ViewStyle;
        buttonStyles.backgroundColor = containerBackgroundColor && containerBackgroundColor(disabled);

        if (!icon)
            switch (iconPlacement) {
                case "top": buttonStyles.flexDirection = 'column'; break;
                case "left": buttonStyles.flexDirection = 'row'; break;
                case "right": buttonStyles.flexDirection = 'row-reverse'; break;
                case "bottom": buttonStyles.flexDirection = 'column-reverse'; break;
            }

        return buttonStyles;
    }

    const innerTitleStyles = (): TextStyle => {
        let titleStyles = {} as TextStyle;
        titleStyles.color = titleColor && titleColor(disabled);
        return titleStyles;
    }

    const onButtonPress = () => {
        if (disabled) return;
        onPress();
    }

    return (
        <TouchableHighlight
            underlayColor={containerUndelayColor && containerUndelayColor(disabled)}
            style={[otherContainerStyles, innerContainerStyles(), styles]}
            onPress={onButtonPress}>
            <React.Fragment>
                {icon !== undefined && <Icon
                    name={icon}
                    size={iconStyles?.size || otherIconStyle.size}
                    color={iconStyles?.color || (iconColor && iconColor(disabled))} />}
                {title !== undefined &&
                    <Title styles={[otherTitleStyle, innerTitleStyles(), titleStyles]}>{title}</Title>}
            </React.Fragment>
        </TouchableHighlight>
    )
}