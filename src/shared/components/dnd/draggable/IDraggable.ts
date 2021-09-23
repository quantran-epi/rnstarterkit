import { GestureEvent, PanGestureHandlerEventPayload, ScrollView } from "react-native-gesture-handler";
import { IUseDragHandler } from "../useDrag/IUseDrag";

interface IDraggableProps {
    handler: IUseDragHandler;
    children: (dragging: boolean) => React.ReactNode;
    onDrag?: (eventData: PanGestureHandlerEventPayload) => void;
    scrollViewRefs?: React.RefObject<ScrollView>[];
}

export type {
    IDraggableProps
}