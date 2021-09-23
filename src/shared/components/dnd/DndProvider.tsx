import React, { FunctionComponent, useRef, useState } from 'react';
import { Subject } from 'rxjs';
import { IDndContext, IDndProviderProps, IDraggableItem } from './IDndProvider';

const defaultContext: IDndContext = {
    $draggingItem: new Subject<IDraggableItem>(),
    $droppedItem: new Subject<IDraggableItem>(),
}

const DndContext = React.createContext<IDndContext>(defaultContext);

const DndProvider: FunctionComponent<IDndProviderProps> = ({
    children
}) => {
    const initialContext = (): IDndContext => {
        return defaultContext;
    }

    const [context, setContext] = useState<IDndContext>(initialContext());

    return (
        <DndContext.Provider value={context}>
            {children}
        </DndContext.Provider>
    )
}

export {
    DndContext,
    DndProvider
}