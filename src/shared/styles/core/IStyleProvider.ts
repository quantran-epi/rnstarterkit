import { ThemeVariant } from "@styles/themes/ThemeVariant";

export interface IStyleProviderProps {
    defaultTheme?: ThemeVariant;
}

export interface IStyleProviderActions {
    switchTheme: (variant: ThemeVariant) => void
}