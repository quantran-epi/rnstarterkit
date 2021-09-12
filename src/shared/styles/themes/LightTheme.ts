import { AppStyles } from '../base/AppStyles';
import { DefaultThemeVariables } from './ThemeVariables';

export class LightTheme extends AppStyles {
    constructor() {
        super({
            ...DefaultThemeVariables,
        });
    }
}