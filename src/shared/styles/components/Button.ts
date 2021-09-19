import { BaseComponentStyles } from '@styles/base/AppStyles';
import { ButtonContainerStyle, ButtonTitleStyle, ButtonIconStyle } from '@styles/base/ComponentStyleType';
import { ButtonVariant } from '@styles/base/ComponentStyleVariant';
import { IThemeVariables } from '@styles/themes/ThemeVariables';

class ButtonContainerStyles extends BaseComponentStyles<ButtonContainerStyle, ButtonVariant>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            justifyContent: 'center',
            alignItems: 'center',
            underlayColor: (disabled: boolean) => disabled ? themeVariables.DisabledColor : themeVariables.SecondaryColor,
        });
        this.setVariant("primary", {
            backgroundColor: (disabled: boolean) => disabled ? themeVariables.DisabledColor : themeVariables.PrimaryColor,
        })
        this.setVariant("success", {
            backgroundColor: (disabled: boolean) => disabled ? themeVariables.DisabledColor : themeVariables.SuccessColor,
        })
        this.setVariant("danger", {
            backgroundColor: (disabled: boolean) => disabled ? themeVariables.DisabledColor : themeVariables.DangerColor,
        })
        this.setVariant("warning", {
            backgroundColor: (disabled: boolean) => disabled ? themeVariables.DisabledColor : themeVariables.WarningColor,
        })
        this.setVariant("transparent", {
            backgroundColor: (disabled: boolean) => themeVariables.TransparentColor,
            underlayColor: (disabled: boolean) => disabled ? themeVariables.TransparentColor : themeVariables.SecondaryColor,
        })
        this.setVariant("sm", {
            padding: 5,
        })
        this.setVariant("md", {
            padding: 10,
        })
        this.setVariant("lg", {
            padding: 20
        })
        this.setVariant("rounded", {
            borderRadius: 1000
        })
        this.setVariant("top-icon", {
            flexDirection: 'column'
        })
        this.setVariant("left-icon", {
            flexDirection: 'row'
        })
        this.setVariant("right-icon", {
            flexDirection: 'row-reverse'
        })
        this.setVariant("bottom-icon", {
            flexDirection: 'column-reverse'
        })
    }
}

class ButtonTitleStyles extends BaseComponentStyles<ButtonTitleStyle, ButtonVariant>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            marginLeft: 10,
            marginRight: 10
        })
        this.setVariant("primary", {
            color: (disabled: boolean) => themeVariables.TextOnPrimaryColor
        })
        this.setVariant("success", {
            color: (disabled: boolean) => themeVariables.TextOnSuccessColor
        })
        this.setVariant("warning", {
            color: (disabled: boolean) => themeVariables.TextOnWarningColor
        })
        this.setVariant("danger", {
            color: (disabled: boolean) => themeVariables.TextOnDangerColor
        })
        this.setVariant("transparent", {
            color: (disabled: boolean) => disabled ? themeVariables.DisabledColor : themeVariables.TextOnTransparentColor
        })
    }
}

class ButtonIconStyles extends BaseComponentStyles<ButtonIconStyle, ButtonVariant>  {
    constructor(themeVariables: IThemeVariables) {
        super();
        this.set({
            size: themeVariables.IconSize,
        })
        this.setVariant("primary", {
            color: (disabled: boolean) => themeVariables.TextOnPrimaryColor
        })
        this.setVariant("success", {
            color: (disabled: boolean) => themeVariables.TextOnSuccessColor
        })
        this.setVariant("warning", {
            color: (disabled: boolean) => themeVariables.TextOnWarningColor
        })
        this.setVariant("danger", {
            color: (disabled: boolean) => themeVariables.TextOnDangerColor
        })
        this.setVariant("transparent", {
            color: (disabled: boolean) => disabled ? themeVariables.DisabledColor : themeVariables.TextOnTransparentColor
        })
    }
}

export const ButtonStyles = {
    ButtonContainerStyles,
    ButtonTitleStyles,
    ButtonIconStyles,

}