import { TabBarItemVariant } from '@styles/base/ComponentStyleVariant';
import { IconStyle } from '@styles/base/ComponentStyleType';
import { BaseComponentStyles } from '@styles/base/AppStyles';
import { IThemeVariables } from '@styles/themes/ThemeVariables';
import { ViewStyle, TextStyle } from 'react-native';

class TabBarStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            borderBottomColor: themeVariables.WhiteColor,
            borderBottomWidth: 0.3,
            shadowColor: themeVariables.BlackColor,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,

            elevation: 2,
        })
    }
}

class TabBarItemStyles extends BaseComponentStyles<ViewStyle, TabBarItemVariant>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            alignSelf: 'stretch',
            backgroundColor: themeVariables.PrimaryColor,
        })
        this.setVariant('active', {
            borderBottomColor: themeVariables.WhiteColor,
            borderBottomWidth: 3,
        })
    }
}

class TabBarItemTitleStyles extends BaseComponentStyles<TextStyle, TabBarItemVariant>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            fontSize: themeVariables.TextFontSize.sm,
            color: themeVariables.GrayColor
        })
        this.setVariant('active', {
            fontWeight: 'bold',
            color: themeVariables.WhiteColor
        })
    }
}

class TabBarItemIconStyles extends BaseComponentStyles<IconStyle, TabBarItemVariant>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            color: themeVariables.GrayColor
        })
        this.setVariant('active', {
            color: themeVariables.WhiteColor
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