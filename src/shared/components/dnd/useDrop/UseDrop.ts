import { LayoutRectangle } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { DndContext } from '../DndProvider';
import { IDraggableItem } from '../IDndProvider';
import { IUseDrop, IUseDropHandler, IUseDropMonitor, IUseDropResult, IUseDropSpec } from "./IUseDrop";
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

export const useDrop: IUseDrop = <R extends IUseDropResult = {}>(
    factory: () => IUseDropSpec<R>,
    deps: ReadonlyArray<any>
) => {
    const dropLayout = useRef<LayoutRectangle>();
    const [isOver, setIsOver] = useState<boolean>(false);
    const [canDrop, setCanDrop] = useState<boolean>(false);

    const context = useContext(DndContext);
    const dropFactory = React.useMemo(factory, deps);
    const monitor = useRef<IUseDropMonitor>({
        isOver: () => isOver,
        canDrop: () => canDrop
    });
    const handler = useRef<IUseDropHandler>({
        setLayout: (layout: LayoutRectangle) => { dropLayout.current = layout }
    })

    const checkIsOver = (draggingItem: IDraggableItem): boolean => {
        return false;
    }

    const checkCanDrop = (draggingItem: IDraggableItem): boolean => {
        return dropFactory.canDrop ? dropFactory.canDrop(draggingItem) : true;
    }

    const registerDraggingListener = (): Subscription => {
        return context.$draggingItem
            .pipe(filter((draggingItem: IDraggableItem) => draggingItem.type === dropFactory.accept))
            .subscribe((draggingItem: IDraggableItem) => {
                //check isOver and canDrop or not => update isOver and canDrop state
                setIsOver(checkIsOver(draggingItem));
                setCanDrop(checkCanDrop(draggingItem));
                console.log('subscribe: ', draggingItem.data.layout)
            })
    }

    const registerDroppedListener = (): Subscription => {
        return context.$droppedItem
            .pipe(filter((draggingItem: IDraggableItem) => draggingItem.type === dropFactory.accept))
            .subscribe((draggingItem: IDraggableItem) => {
                if (checkIsOver(draggingItem) && checkCanDrop(draggingItem) && dropFactory.drop)
                    dropFactory.drop(draggingItem);
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
        dropFactory.connect(monitor.current),
        handler.current
    ]
}