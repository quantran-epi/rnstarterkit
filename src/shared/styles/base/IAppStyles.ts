import { ImageStyle, TextStyle, ViewStyle } from "react-native";

type RNStyleType = ViewStyle | TextStyle | ImageStyle

interface IStylable<T extends RNStyleType> {
    styles?: T;
}

interface IComponentStyles<T extends RNStyleType> {
    values: () => T;
    set: (styles: T) => void;
}

interface IAppStyles {
    container: IComponentStyles<ViewStyle>;
    paragraph: IComponentStyles<TextStyle>;
}

export type {
    IStylable,
    RNStyleType,
    IComponentStyles,
    IAppStyles
}