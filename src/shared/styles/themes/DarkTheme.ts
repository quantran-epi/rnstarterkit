import { AppStyles } from '@styles/base/AppStyles';
import { DefaultThemeVariables } from './ThemeVariables';


export class DarkTheme extends AppStyles {
    constructor() {
        super({
            ...DefaultThemeVariables,
            PrimaryColor: "#506D84"
        });
    }
}