import { IDraggableItemData } from "../IDndProvider";

type IUseDragResult = Record<string, any>;
type IUseDragConnector<R extends IUseDragResult> = (monitor: IUseDragMonitor) => R;
type IUseDragReturnType<R extends IUseDragResult> = [R, IUseDragHandler];

interface IUseDragHandler {
    activate: () => void;
    deactivate: () => void;
    dragging: (payload: IDraggableItemData) => void;
    finishDrag: (payload: IDraggableItemData) => void;
    canDrag: () => boolean;
}

interface IUseDragMonitor {
    isDragging: () => boolean;
    isActivated: () => boolean;
}

interface IUseDragSpec<R extends IUseDragResult> {
    type: string;
    connect?: IUseDragConnector<R>;
    canDrag?: (monitor: IUseDragMonitor) => boolean;
}

type IUseDrag = <R extends IUseDragResult>(
    factory: () => IUseDragSpec<R>,
    deps: ReadonlyArray<any>
) => IUseDragReturnType<R>

export type {
    IUseDrag,
    IUseDragResult,
    IUseDragSpec,
    IUseDragReturnType,
    IUseDragMonitor,
    IUseDragHandler,
    IUseDragConnector
}