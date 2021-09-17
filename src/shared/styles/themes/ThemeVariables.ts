export interface IThemeVariables {
    PrimaryColor: string;
    SecondaryColor: string;
    WhiteColor: string;
    TextOnPrimaryColor: string;
    TextOnSecondaryColor: string;
    TextOnWhiteColor: string;
    BorderColor: string;
    DisabledColor: string;

    FontFamily: string;
    ParagraphFontSize: number;

    BorderWidth: number;
}

export const DefaultThemeVariables: IThemeVariables = {
    PrimaryColor: "#344955",
    SecondaryColor: "#F9AA33",
    WhiteColor: "#FFF",
    TextOnPrimaryColor: "#FFF",
    TextOnSecondaryColor: "#FFF",
    TextOnWhiteColor: "#000",

    BorderColor: "#a9a9a9",
    DisabledColor: "",

    FontFamily: "",
    ParagraphFontSize: 14,

    BorderWidth: 0.5
}