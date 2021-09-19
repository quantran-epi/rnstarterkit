import { IconStyle } from '@styles/base/ComponentStyleType';
import { BaseComponentStyles } from '@styles/base/AppStyles';
import { IThemeVariables } from '@styles/themes/ThemeVariables';

export class IconStyles extends BaseComponentStyles<IconStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            size: themeVariables.IconSize,
        })
    }
}