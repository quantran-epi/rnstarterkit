import { IDraggableItemPayload } from "../IDndProvider";

type IUseDragResult = Record<string, any>;
type IUseDragConnector<R extends IUseDragResult> = (monitor: IUseDragMonitor) => R;
type IUseDragReturnType<R extends IUseDragResult> = [R, IUseDragHandler];

interface IUseDragHandler {
    dragging: (payload: IDraggableItemPayload) => void;
    finishDrag: () => void;
}

interface IUseDragMonitor {
    isDragging: () => boolean;
}

interface IUseDragSpec<R extends IUseDragResult> {
    type: string;
    connect: IUseDragConnector<R>;
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