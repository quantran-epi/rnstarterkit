import { IconStyle } from '@styles/base/ComponentStyleType';
import { BaseComponentStyles } from '@styles/base/AppStyles';
import { IThemeVariables } from '@styles/themes/ThemeVariables';
import { ViewStyle, TextStyle } from 'react-native';

class TabBarStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

class TabBarItemStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            alignSelf: 'stretch'
        })
    }
}

class TabBarItemTitleStyles extends BaseComponentStyles<TextStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            fontSize: themeVariables.TextFontSize.sm
        })
    }
}

class TabBarItemIconStyles extends BaseComponentStyles<IconStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}


class TabPageStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            flex: 1,
        })
    }
}

export const TabViewStyles = {
    TabBarStyles,
    TabBarItemStyles,
    TabBarItemTitleStyles,
    TabBarItemIconStyles,
    TabPageStyles
}