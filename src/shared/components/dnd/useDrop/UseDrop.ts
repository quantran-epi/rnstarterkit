import React, { useContext, useEffect, useRef, useState } from 'react';
import { DndContext } from '../DndProvider';
import { IDraggableItem } from '../IDndProvider';
import { IUseDrop, IUseDropHandler, IUseDropMonitor, IUseDropResult, IUseDropSpec } from "./IUseDrop";

export const useDrop: IUseDrop = <R extends IUseDropResult = {}>(
    factory: () => IUseDropSpec<R>,
    deps: ReadonlyArray<any>
) => {
    const [isOver, setIsOver] = useState<boolean>(false);
    const [canDrop, setCanDrop] = useState<boolean>(true);

    const context = useContext(DndContext);
    const dropFactory = React.useMemo(factory, deps);
    const monitor = useRef<IUseDropMonitor>({
        isOver: () => isOver,
        canDrop: () => canDrop
    });
    const handler = useRef<IUseDropHandler>({

    })

    useEffect(() => {
        let subscription = context.$draggingItem.subscribe((draggingItem: IDraggableItem) => {
            if (draggingItem.type === dropFactory.accept)
                console.log('subscribe: ', draggingItem);
        })

        return () => {
            subscription.unsubscribe();
        }
    }, [])

    return [
        dropFactory.connect(monitor.current),
        handler.current
    ]
}