import { ButtonVariant } from '@styles/base/ComponentStyleVariant';
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { ButtonIconStyle, ButtonTitleStyle, IconStyle } from '.';
import { ButtonContainerStyle, AppStyleType } from './ComponentStyleType'

interface IStylable<T extends AppStyleType> {
    styles?: StyleProp<T>;
}

interface IComponentStyles<T extends AppStyleType, V extends string = any> {
    setVariant: (variant: V, styles: Partial<T>) => void;
    values: (variants?: V[]) => T;
}

interface IAppStyles {
    icon: IComponentStyles<IconStyle>;
    box: IComponentStyles<ViewStyle>;
    container: IComponentStyles<ViewStyle>;
    paragraph: IComponentStyles<TextStyle>;
    bottomSheet: {
        headerHandle: IComponentStyles<ViewStyle>;
        headerContainer: IComponentStyles<ViewStyle>;
        contentContainer: IComponentStyles<ViewStyle>;
    },
    button: {
        container: IComponentStyles<ButtonContainerStyle, ButtonVariant>,
        title: IComponentStyles<ButtonTitleStyle, ButtonVariant>,
        icon: IComponentStyles<ButtonIconStyle, ButtonVariant>
    },
    }
}

export type {
    IStylable,
    IComponentStyles,
    IAppStyles
}