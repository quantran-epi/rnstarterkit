import { IStylable } from '@styles/base';
import { LayoutChangeEvent, ViewStyle } from 'react-native';

export interface IBoxProps extends IStylable<ViewStyle> {
    onLayout?: (event: LayoutChangeEvent) => void;
    children?: React.ReactNode;
}