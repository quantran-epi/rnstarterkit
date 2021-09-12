export interface IThemeVariables {
    PrimaryColor: string;
    SecondaryColor: string;
    AccentColor: string;
    BorderColor: string;
    DisabledColor: string;

    FontFamily: string;
    ParagraphFontSize: number;
}

export const DefaultThemeVariables: IThemeVariables = {
    PrimaryColor: "#FFF",
    SecondaryColor: "#000",
    AccentColor: "#D4B499",
    BorderColor: "",
    DisabledColor: "",

    FontFamily: "",
    ParagraphFontSize: 14,
}