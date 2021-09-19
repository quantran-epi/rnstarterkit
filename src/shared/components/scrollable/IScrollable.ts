import { IStylable } from '@styles/base';
import { ScrollViewProps, ViewStyle } from 'react-native';

export interface IScrollable extends IStylable<ViewStyle> {
    innerScrollViewProps?: Partial<Pick<ScrollViewProps,
        "contentContainerStyle">>
}