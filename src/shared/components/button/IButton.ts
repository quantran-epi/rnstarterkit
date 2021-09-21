import { ButtonColorVariant, ButtonIconPlacementVariant, ButtonShapeVariant, ButtonSizeVariant, IconStyle, IStylable } from '@styles/base';
import { ViewStyle, TextStyle, GestureResponderEvent, LayoutChangeEvent } from 'react-native';

export interface IButtonProps extends IStylable<ViewStyle> {
    onPress: (event: GestureResponderEvent) => void;
    title?: string;
    icon?: string;
    iconPlacement?: ButtonIconPlacementVariant;
    titleStyles?: TextStyle;
    iconStyles?: IconStyle;
    disabled?: boolean;
    color?: ButtonColorVariant;
    shape?: ButtonShapeVariant;
    size?: ButtonSizeVariant;
    fullwidth?: boolean;
    onLayout?: (event: LayoutChangeEvent) => void;
}