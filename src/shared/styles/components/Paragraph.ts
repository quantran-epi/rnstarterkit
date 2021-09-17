import { TextStyle } from 'react-native';
import { BaseComponentStyles } from '@styles/base/AppStyles';
import { IThemeVariables } from '@styles/themes/ThemeVariables';

export class ParagraphStyles extends BaseComponentStyles<TextStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            fontFamily: themeVariables.FontFamily,
            color: themeVariables.SecondaryColor,
            fontSize: themeVariables.ParagraphFontSize
        })
    }
}