import { TextSizeVariant } from "@styles/base/ComponentStyleVariant";

export interface IThemeVariables {
    PrimaryColor: string;
    SecondaryColor: string;
    WhiteColor: string;
    SuccessColor: string;
    DangerColor: string;
    WarningColor: string;
    TransparentColor: string;

    TextOnPrimaryColor: string;
    TextOnSecondaryColor: string;
    TextOnWhiteColor: string;
    TextOnSuccessColor: string;
    TextOnWarningColor: string;
    TextOnDangerColor: string;
    TextOnTransparentColor: string;

    BorderColor: string;
    DisabledColor: string;

    FontFamily: string;
    TextFontSize: Record<TextSizeVariant, number>;
    IconSize: number;

    BorderWidth: number;
}

export const DefaultThemeVariables: IThemeVariables = {
    PrimaryColor: "#344955",
    SecondaryColor: "#D4B499",
    WhiteColor: "#FFF",
    SuccessColor: "#43A047",
    DangerColor: "#E64A19",
    WarningColor: "#FFAB00",
    TransparentColor: "transparent",

    TextOnPrimaryColor: "#FFF",
    TextOnSecondaryColor: "#FFF",
    TextOnWhiteColor: "#000",
    TextOnSuccessColor: "#FFF",
    TextOnWarningColor: "#FFF",
    TextOnDangerColor: "#FFF",
    TextOnTransparentColor: "#000",

    BorderColor: "#cccccc",
    DisabledColor: "#d9d9d9",

    FontFamily: "",
    TextFontSize: {
        "sm": 11, 
        "md": 14,
        "lg": 18
    },
    IconSize: 24,

    BorderWidth: 0.5
}