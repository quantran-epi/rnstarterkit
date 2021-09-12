import { BaseComponentStyles } from '@styles/base/AppStyles';
import { IThemeVariables } from '@styles/themes/ThemeVariables';
import { ViewStyle } from 'react-native';

export class BaseContainerStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            flex: 1,
            backgroundColor: themeVariables.PrimaryColor
        })
    }
}