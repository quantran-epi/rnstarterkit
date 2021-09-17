import { BoxStyles } from './../components/Box';
import { TextStyle } from 'react-native';
import { ParagraphStyles } from '../components/Paragraph';
import { ContainerStyles } from '../components/Container';
import { IAppStyles, IComponentStyles, RNStyleType } from "./IAppStyles";
import { ViewStyle } from 'react-native';
import { IThemeVariables } from '@styles/themes/ThemeVariables';
import { BottomSheet } from '@styles/components/BottomSheet';

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
    box: IComponentStyles<ViewStyle>;
    container: IComponentStyles<ViewStyle>;
    paragraph: IComponentStyles<TextStyle>;
    bottomSheet: {
        headerHandle: IComponentStyles<ViewStyle>;
        headerContainer: IComponentStyles<ViewStyle>;
        contentContainer: IComponentStyles<ViewStyle>;
    }

    constructor(themeVariables: IThemeVariables) {
        this._themeVariables = themeVariables;
        this.box = new BoxStyles(themeVariables);
        this.container = new ContainerStyles(themeVariables);
        this.paragraph = new ParagraphStyles(themeVariables);
        this.bottomSheet = {
            headerHandle: new BottomSheet.HeaderHandleStyles(themeVariables),
            headerContainer: new BottomSheet.HeaderContainerStyles(themeVariables),
            contentContainer: new BottomSheet.ContentContainerStyles(themeVariables)
        }
    }
}

export {
    BaseComponentStyles,
    AppStyles
}