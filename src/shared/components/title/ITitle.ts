import { IStylable } from '@styles/base';
import { TextStyle } from 'react-native';

export interface ITitleProps extends IStylable<TextStyle> {
    children: string;
}