import { LayoutRectangle } from 'react-native';
import { Subject } from 'rxjs';

interface IDndContext {
    $draggingItem: Subject<IDraggableItem>;
}

interface IDndProviderProps {

}

interface IDraggableItem {
    type: string;
    data: IDraggableItemPayload;
}

interface IDraggableItemPayload {
    layout: LayoutRectangle;
}

export type {
    IDndContext,
    IDndProviderProps,
    IDraggableItem,
    IDraggableItemPayload
}