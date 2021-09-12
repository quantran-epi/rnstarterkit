import { ImageStyle, TextStyle, ViewStyle } from "react-native";

type RNStyleType = ViewStyle | TextStyle | ImageStyle

interface IComponentStyles<T extends RNStyleType> {
    values: () => T;
    set: (styles: T) => void;
}

interface IAppStyles {
    container: IComponentStyles<ViewStyle>;
    paragraph: IComponentStyles<TextStyle>;
}

export type {
    RNStyleType,
    IComponentStyles,
    IAppStyles
}