import { ButtonColorVariant, ButtonShapeVariant, ButtonSizeVariant, IconStyle, IStylable } from '@styles/base';
import { ViewStyle, TextStyle } from 'react-native';

type ButtonIconPlacement = "top" | "left" | "right" | "bottom"

export interface IButtonProps extends IStylable<ViewStyle> {
    onPress: () => void;
    title?: string;
    icon?: string;
    iconPlacement?: ButtonIconPlacement;
    titleStyles?: TextStyle;
    iconStyles?: IconStyle;
    disabled?: boolean;
    color?: ButtonColorVariant;
    shape?: ButtonShapeVariant;
    size?: ButtonSizeVariant;
}