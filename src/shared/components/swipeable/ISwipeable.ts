import { ViewStyle } from 'react-native';
import { IStylable } from '@styles/base';

export type SwipeableDirection = "up" | "down" | "left" | "right"

export interface ISwipeableProps extends IStylable<ViewStyle> {
    directions: SwipeableDirection[];
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
}