import { LayoutRectangle } from 'react-native';
import { IDraggableItem } from '../IDndProvider';
type IUseDropResult = Record<string, any>
type IUseDropConnector<R extends IUseDropResult> = (monitor: IUseDropMonitor) => R;
type IUseDropReturnType<R extends IUseDropResult> = [R, IUseDropHandler];

interface IUseDropHandler {
    setLayout: (layout: LayoutRectangle) => void;
}

interface IUseDropMonitor {
    isOver: () => boolean;
    canDrop: () => boolean;
}

interface IUseDropSpec<R extends IUseDropResult> {
    accept: string;
    connect?: IUseDropConnector<R>;
    canDrop?: (item: IDraggableItem) => boolean;
    drop?: (item: IDraggableItem) => void;
}

type IUseDrop = <R extends IUseDropResult>(
    factory: () => IUseDropSpec<R>,
    deps: ReadonlyArray<any>
) => IUseDropReturnType<R>

export type {
    IUseDrop,
    IUseDropResult,
    IUseDropMonitor,
    IUseDropConnector,
    IUseDropSpec,
    IUseDropReturnType,
    IUseDropHandler
}