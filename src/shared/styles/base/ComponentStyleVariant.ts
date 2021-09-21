//button
type ButtonColorVariant = "primary" | "success" | "danger" | "warning" | "transparent";
type ButtonSizeVariant = "lg" | "md" | "sm";
type ButtonShapeVariant = "square" | "rounded";
type ButtonIconPlacementVariant = "top-icon" | "left-icon" | "right-icon" | "bottom-icon"
type ButtonVariant = ButtonColorVariant | ButtonSizeVariant | ButtonShapeVariant | ButtonIconPlacementVariant

//paragraph
type TextSizeVariant = "sm" | "md" | "lg"
type TextVariant = TextSizeVariant;

export type {
    ButtonColorVariant,
    ButtonSizeVariant,
    ButtonShapeVariant,
    ButtonIconPlacementVariant,
    ButtonVariant,
    TextSizeVariant,
    TextVariant
}