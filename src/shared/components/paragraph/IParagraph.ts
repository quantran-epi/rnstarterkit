import { IStylable } from '@styles/base';
import { TextStyle } from 'react-native';

export interface IParagraphProps extends IStylable<TextStyle> {
    children: string;
}