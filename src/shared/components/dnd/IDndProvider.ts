import { LayoutRectangle } from 'react-native';
import { Subject } from 'rxjs';

interface IDndContext {
    $draggingItem: Subject<IDraggableItem>;
    $droppedItem: Subject<IDraggableItem>;
}

interface IDndProviderProps {

}

interface IDraggableItem {
    type: string;
    data: IDraggableItemData;
}

interface IDraggableItemData {
    layout: LayoutRectangle,
}

export type {
    IDndContext,
    IDndProviderProps,
    IDraggableItem,
    IDraggableItemData
}