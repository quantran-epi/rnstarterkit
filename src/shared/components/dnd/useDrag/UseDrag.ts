import { useContext, useMemo, useState } from "react";
import { DndContext } from "../DndProvider";
import { IDraggableItem } from "../IDndProvider";
import { IUseDrag, IUseDragHandler, IUseDragMonitor, IUseDragResult, IUseDragSpec } from "./IUseDrag";

export const useDrag: IUseDrag = <R extends IUseDragResult>(
    factory: () => IUseDragSpec<R>,
    deps: ReadonlyArray<any>
) => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isActivated, setIsActivated] = useState<boolean>(false);
    const context = useContext(DndContext);
    const dragFactory = useMemo(factory, deps);
    const monitor = useMemo<IUseDragMonitor>(() => ({
        isDragging: () => isDragging,
        isActivated: () => isActivated
    }), [isDragging, isActivated]);
    const handler = useMemo<IUseDragHandler>(() => ({
        activate: () => {
            if (!isActivated) setIsActivated(true);
        },
        deactivate: () => {
            if (isActivated) setIsActivated(false);
        },
        dragging: (payload) => {
            let item: IDraggableItem = { type: dragFactory.type, data: payload };
            setIsDragging(true);
            context.$draggingItem.next(item);
        },
        finishDrag: (payload) => {
            let item: IDraggableItem = { type: dragFactory.type, data: payload };
            setIsDragging(false);
            if (dragFactory.whenFinishDrag) dragFactory.whenFinishDrag(item, monitor);
            context.$droppedItem.next(item);
        },
        canDrag: () => {
            return dragFactory.canDrag ? dragFactory.canDrag(monitor) : true;
        }
    }), [isActivated, dragFactory, monitor])

    return [
        dragFactory.connect ? dragFactory.connect(monitor) : {} as R,
        handler
    ]
}
