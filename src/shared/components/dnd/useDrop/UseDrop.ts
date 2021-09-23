import { LayoutRectangle } from 'react-native';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DndContext } from '../DndProvider';
import { IDraggableItem } from '../IDndProvider';
import { IUseDrop, IUseDropHandler, IUseDropMonitor, IUseDropResult, IUseDropSpec } from "./IUseDrop";
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

export const useDrop: IUseDrop = <R extends IUseDropResult = {}>(
    factory: () => IUseDropSpec<R>,
    deps: ReadonlyArray<any>
) => {
    const dropLayout = useRef<LayoutRectangle>({
        height: 0,
        width: 0,
        x: 0,
        y: 0
    });
    const [isOver, setIsOver] = useState<boolean>(false);
    const [canDrop, setCanDrop] = useState<boolean>(false);

    const context = useContext(DndContext);
    const dropFactory = useMemo(factory, deps);
    const monitor = useMemo<IUseDropMonitor>(() => ({
        isOver: () => isOver,
        canDrop: () => canDrop
    }), [isOver, canDrop]);
    const handler = useRef<IUseDropHandler>({
        setLayout: (layout: LayoutRectangle) => { dropLayout.current = layout }
    })

    const resetState = () => {
        setIsOver(false);
        setCanDrop(false);
    }

    const checkIsOver = (draggingItem: IDraggableItem): boolean => {
        let x1 = dropLayout.current.x,
            x2 = dropLayout.current.x + dropLayout.current.width,
            y1 = dropLayout.current.y,
            y2 = dropLayout.current.y + dropLayout.current.height;
        let x = draggingItem.data.layout.x,
            y = draggingItem.data.layout.y;
        return x >= x1 && x <= x2 && y >= y1 && y <= y2;
    }

    const checkCanDrop = (draggingItem: IDraggableItem): boolean => {
        if (draggingItem.type !== dropFactory.accept) return false;
        return dropFactory.canDrop ? dropFactory.canDrop(draggingItem) : true;
    }

    const registerDraggingListener = (): Subscription => {
        return context.$draggingItem
            .pipe(filter((draggingItem: IDraggableItem) => draggingItem.type === dropFactory.accept))
            .subscribe((draggingItem: IDraggableItem) => {
                //check isOver and canDrop or not => update isOver and canDrop state
                setIsOver(checkIsOver(draggingItem));
                setCanDrop(checkCanDrop(draggingItem));
            })
    }

    const registerDroppedListener = (): Subscription => {
        return context.$droppedItem
            .pipe(filter((draggingItem: IDraggableItem) => draggingItem.type === dropFactory.accept))
            .subscribe((draggingItem: IDraggableItem) => {
                if (checkIsOver(draggingItem) && checkCanDrop(draggingItem) && dropFactory.drop) {
                    dropFactory.drop(draggingItem);
                    resetState();
                }
            })
    }

    useEffect(() => {
        let draggingSubscription = registerDraggingListener();
        let droppedSubscription = registerDroppedListener();

        return () => {
            draggingSubscription.unsubscribe();
            droppedSubscription.unsubscribe();
        }
    }, [])

    return [
        dropFactory.connect ? dropFactory.connect(monitor) : {} as R,
        handler.current
    ]
}