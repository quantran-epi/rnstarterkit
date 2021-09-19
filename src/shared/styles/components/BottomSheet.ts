import { BaseComponentStyles } from "@styles/base/AppStyles";
import { IThemeVariables } from "@styles/themes/ThemeVariables";
import { ViewStyle } from "react-native";

class HeaderHandleStyles extends BaseComponentStyles<ViewStyle> {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            width: 80,
            height: 10,
            backgroundColor: themeVariables.PrimaryColor,
            borderRadius: 100,
            alignSelf: 'center'
        })
    }
}

class HeaderContainerStyles extends BaseComponentStyles<ViewStyle> {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            minHeight: 30,
            borderWidth: themeVariables.BorderWidth,
            borderColor: themeVariables.BorderColor,
            borderBottomWidth: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            justifyContent: 'center',
            padding: 10
        })
    }
}

class ContentContainerStyles extends BaseComponentStyles<ViewStyle> {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
        })
    }
}

export const BottomSheetStyles = {
    HeaderHandleStyles,
    ContentContainerStyles,
    HeaderContainerStyles
}