import { DefaultThemeVariables } from '@styles/themes';
import { AppStyles } from "@styles/base/AppStyles";

export class LightTheme extends AppStyles {
    constructor() {
        super({
            ...DefaultThemeVariables,
        });
    }
}