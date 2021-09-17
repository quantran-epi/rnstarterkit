import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

type RNStyleType = ViewStyle | TextStyle | ImageStyle

interface IStylable<T extends RNStyleType> {
    styles?: StyleProp<T>;
}

interface IComponentStyles<T extends RNStyleType> {
    values: () => T;
    set: (styles: T) => void;
}

interface IAppStyles {
    box: IComponentStyles<ViewStyle>;
    container: IComponentStyles<ViewStyle>;
    paragraph: IComponentStyles<TextStyle>;
    bottomSheet: {
        headerHandle: IComponentStyles<ViewStyle>;
        headerContainer: IComponentStyles<ViewStyle>;
        contentContainer: IComponentStyles<ViewStyle>;
    }
}

export type {
    IStylable,
    RNStyleType,
    IComponentStyles,
    IAppStyles
}