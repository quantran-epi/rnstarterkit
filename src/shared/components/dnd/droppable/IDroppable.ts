import { IStylable } from '@styles/base';
import { ViewStyle } from 'react-native';
import { IUseDropHandler } from "../useDrop/IUseDrop";

interface IDroppableProps extends IStylable<ViewStyle> {
    handler: IUseDropHandler;
}

export type {
    IDroppableProps
}