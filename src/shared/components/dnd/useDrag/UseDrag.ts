import { useContext, useMemo, useRef, useState } from "react";
import { DndContext } from "../DndProvider";
import { IUseDrag, IUseDragHandler, IUseDragMonitor, IUseDragResult, IUseDragSpec } from "./IUseDrag";

export const useDrag: IUseDrag = <R extends IUseDragResult>(
    factory: () => IUseDragSpec<R>,
    deps: ReadonlyArray<any>
) => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const context = useContext(DndContext);
    const dragFactory = useMemo(factory, deps);
    const monitor = useRef<IUseDragMonitor>({
        isDragging: () => isDragging
    });
    const handler = useRef<IUseDragHandler>({
        dragging: (payload) => {
            setIsDragging(true)
            context.$draggingItem.next({
                type: dragFactory.type,
                data: payload
            })
        },
        finishDrag: (payload) => {
            setIsDragging(false);
            context.$droppedItem.next({
                type: dragFactory.type,
                data: payload
            })
        }
    })

    return [
        dragFactory.connect(monitor.current),
        handler.current
    ]
}
