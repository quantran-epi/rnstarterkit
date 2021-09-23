import { useContext, useMemo, useRef, useState } from "react";
import { DndContext } from "../DndProvider";
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
            setIsDragging(true);
            context.$draggingItem.next({
                type: dragFactory.type,
                data: payload
            });
        },
        finishDrag: (payload) => {
            setIsDragging(false);
            context.$droppedItem.next({
                type: dragFactory.type,
                data: payload
            })
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
