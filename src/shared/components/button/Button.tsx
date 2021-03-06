import { Title } from '@components/title'
import React from 'react'
import { GestureResponderEvent, StyleProp, TextStyle, TouchableHighlight, ViewStyle } from 'react-native'
import { IButtonProps } from './IButton'
import { useStyles } from '@styles/base'
import { Icon } from '@components/icon'

export const Button = React.forwardRef<TouchableHighlight, IButtonProps>(({
    title,
    onPress,
    icon,
    styles,
    titleStyles,
    iconStyles,
    onLayout,
    disabled = false,
    fullwidth = false,
    iconPlacement = "left-icon",
    color = "primary",
    shape = "square",
    size = "md"
}, ref) => {
    const { theme } = useStyles();

    const {
        backgroundColor: containerBackgroundColor,
        underlayColor: containerUndelayColor,
        ...otherContainerStyles
    } = theme.button.container.values([color, shape, size, iconPlacement]);
    const {
        color: titleColor,
        ...otherTitleStyles
    } = theme.button.title.values([color, shape, size, iconPlacement]);
    const {
        color: iconColor,
        size: iconSize
    } = theme.button.icon.values([color, shape, size, iconPlacement]);

    const _containerStyles = (): StyleProp<ViewStyle> => {
        let containerStyles = {} as ViewStyle;
        if (!fullwidth) containerStyles.alignSelf = "flex-start";
        containerStyles.backgroundColor = containerBackgroundColor && containerBackgroundColor(disabled);
        return [otherContainerStyles, containerStyles];
    }

    const _titleStyles = (): StyleProp<TextStyle> => {
        let titleStyles = {} as TextStyle;
        titleStyles.color = titleColor && titleColor(disabled);
        return [otherTitleStyles, titleStyles];
    }

    const onButtonPress = (event: GestureResponderEvent) => {
        if (disabled) return;
        onPress(event);
    }

    return (
        <TouchableHighlight
            ref={ref}
            underlayColor={containerUndelayColor && containerUndelayColor(disabled)}
            style={[_containerStyles(), styles]}
            onPress={onButtonPress}
            onLayout={onLayout}>
            <React.Fragment>
                {icon !== undefined && <Icon
                    name={icon}
                    size={iconStyles?.size || iconSize}
                    color={iconStyles?.color || (iconColor && iconColor(disabled))} />}
                {title !== undefined &&
                    <Title styles={[_titleStyles(), titleStyles]}>{title}</Title>}
            </React.Fragment>
        </TouchableHighlight>
    )
})