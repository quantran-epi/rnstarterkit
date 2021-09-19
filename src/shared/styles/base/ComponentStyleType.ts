import { ImageStyle } from 'react-native';
import { ViewStyle, TextStyle } from 'react-native';

type IconStyle = {
    color?: string;
    size?: number;
}

type ButtonContainerStyle = Omit<ViewStyle, "backgroundColor"> & {
    underlayColor?: (disabled: boolean) => string,
    backgroundColor?: (disabled: boolean) => string,
}

type ButtonTitleStyle = Omit<TextStyle, "color"> & {
    color?: (disabled: boolean) => string;
}

type ButtonIconStyle = Omit<IconStyle, "color"> & {
    color?: (disabled: boolean) => string;
}

type AppStyleType = ViewStyle |
    TextStyle |
    ImageStyle |
    IconStyle |
    ButtonContainerStyle |
    ButtonTitleStyle |
    ButtonIconStyle

export type {
    AppStyleType,
    IconStyle,
    ButtonContainerStyle,
    ButtonTitleStyle,
    ButtonIconStyle,
}