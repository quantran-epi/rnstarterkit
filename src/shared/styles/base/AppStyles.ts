import { TextStyle } from 'react-native';
import { BaseParagraphStyles } from '../components/Paragraph';
import { BaseContainerStyles } from '../components/Container';
import { IAppStyles, IComponentStyles, RNStyleType } from "./IAppStyles";
import { ViewStyle } from 'react-native';
import { IThemeVariables } from '@styles/themes/ThemeVariables';

class BaseComponentStyles<T extends RNStyleType> implements IComponentStyles<T> {
    private _values: T;

    constructor() {
        this._values = {} as T;
    }

    values(): T {
        return this._values
    }

    set(styles: T): void {
        this._values = Object.assign({}, this._values, styles);
    }
}

class AppStyles implements IAppStyles {
    _themeVariables: IThemeVariables;
    container: IComponentStyles<ViewStyle>;
    paragraph: IComponentStyles<TextStyle>;

    constructor(themeVariables: IThemeVariables) {
        this._themeVariables = themeVariables;
        this.container = new BaseContainerStyles(themeVariables);
        this.paragraph = new BaseParagraphStyles(themeVariables);
    }
}

export {
    BaseComponentStyles,
    AppStyles
}