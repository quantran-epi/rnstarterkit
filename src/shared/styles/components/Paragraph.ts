import { TextStyle } from 'react-native';
import { BaseComponentStyles } from '@styles/base/AppStyles';
import { IThemeVariables } from '@styles/themes/ThemeVariables';
import { ParagraphVariant } from '@styles/base/ComponentStyleVariant';

export class ParagraphStyles extends BaseComponentStyles<TextStyle, ParagraphVariant>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            fontFamily: themeVariables.FontFamily,
            color: themeVariables.SecondaryColor,
        })
        this.setVariant("sm", {
            fontSize: themeVariables.TextFontSize.sm
        })
        this.setVariant("md", {
            fontSize: themeVariables.TextFontSize.md
        })
        this.setVariant("lg", {
            fontSize: themeVariables.TextFontSize.lg
        })
    }
}