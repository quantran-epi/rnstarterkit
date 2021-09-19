import { IThemeVariables } from '@styles/themes/ThemeVariables';
import { ViewStyle } from 'react-native';
import { BaseComponentStyles } from '@styles/base/AppStyles';

class ContainerStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

class HeaderStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: themeVariables.BorderColor,
            borderBottomWidth: themeVariables.BorderWidth,
            paddingLeft: 5,
            paddingRight: 5
        })
    }
}

class HeaderTitleStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

class HeaderSubtitleStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

class HeaderToolStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

class HeaderLeftStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

class HeaderRightStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center'
        })
    }
}

class ContentContainerStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

class FooterStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            padding: 5,
            borderTopColor: themeVariables.BorderColor,
            borderTopWidth: themeVariables.BorderWidth,
        })
    }
}

export const ModalStyles = {
    ContainerStyles,
    HeaderStyles,
    HeaderLeftStyles,
    HeaderTitleStyles,
    HeaderSubtitleStyles,
    HeaderToolStyles,
    HeaderRightStyles,
    ContentContainerStyles,
    FooterStyles
}