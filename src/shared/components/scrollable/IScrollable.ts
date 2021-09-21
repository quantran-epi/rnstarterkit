import { IStylable } from '@styles/base';
import { ScrollViewProps, ViewStyle } from 'react-native';

export interface IScrollableProps extends IStylable<ViewStyle> {
    children: React.ReactNode;
    horizontal?: boolean;
    innerScrollViewProps?: Omit<ScrollViewProps, "horizontal">
}