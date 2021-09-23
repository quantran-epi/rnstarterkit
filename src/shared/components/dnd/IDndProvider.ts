import { LayoutRectangle } from 'react-native';
import { GestureEvent, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';
import { Subject } from 'rxjs';

interface IDndContext {
    $draggingItem: Subject<IDraggableItem>;
    $droppedItem: Subject<IDraggableItem>;
}

interface IDndProviderProps {

}

interface IDraggableItem {
    type: string;
    data: IDraggableItemPayload;
}

interface IDraggableItemPayload {
    layout: LayoutRectangle
}

export type {
    IDndContext,
    IDndProviderProps,
    IDraggableItem,
    IDraggableItemPayload
}