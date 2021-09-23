import { BaseComponentStyles } from '@styles/base/AppStyles';
import { IThemeVariables } from '@styles/themes/ThemeVariables';
import { ViewStyle } from 'react-native';

class DraggableStyles extends BaseComponentStyles<ViewStyle>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

export const DndStyles = {
    DraggableStyles
}