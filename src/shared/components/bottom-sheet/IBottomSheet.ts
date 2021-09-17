import { ViewStyle } from "react-native";

export interface IBottomSheetProps {
    children: React.ReactNode;
    headerContent?: React.ReactNode;
    headerStyles?: ViewStyle;
    contentContainerStyle?: ViewStyle;
    headerHandleComponent?: React.ReactNode;
    snapPoints: string[] | number[];
}