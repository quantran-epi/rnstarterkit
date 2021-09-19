import { ButtonColorVariant, ButtonIconPlacementVariant, ButtonShapeVariant, ButtonSizeVariant, IconStyle, IStylable } from '@styles/base';
import { ViewStyle, TextStyle } from 'react-native';

export interface IButtonProps extends IStylable<ViewStyle> {
    onPress: () => void;
    title?: string;
    icon?: string;
    iconPlacement?: ButtonIconPlacementVariant;
    titleStyles?: TextStyle;
    iconStyles?: IconStyle;
    disabled?: boolean;
    color?: ButtonColorVariant;
    shape?: ButtonShapeVariant;
    size?: ButtonSizeVariant;
}