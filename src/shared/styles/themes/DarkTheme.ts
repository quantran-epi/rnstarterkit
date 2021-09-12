import { AppStyles } from '@styles/base/AppStyles';
import { DefaultThemeVariables } from '@styles/themes';


export class DarkTheme extends AppStyles {
    constructor() {
        super({
            ...DefaultThemeVariables,
            PrimaryColor: "#506D84"
        });
    }
}