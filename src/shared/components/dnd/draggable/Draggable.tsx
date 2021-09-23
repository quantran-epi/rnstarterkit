import React, { useRef, useState } from 'react'
import { IDraggableProps } from './IDraggable'
import {
    GestureEvent,
    HandlerStateChangeEvent,
    PanGestureHandler,
    PanGestureHandlerEventPayload,
    State,
    TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import { Animated, LayoutChangeEvent, LayoutRectangle, NativeSyntheticEvent, View } from 'react-native'

export const Draggable = React.forwardRef<any, IDraggableProps>(({
    handler,
    children,
    onDrag,
    scrollViewRefs,
}, ref) => {
    const initialLayout = useRef<LayoutRectangle>({
        height: 0,
        width: 0,
        x: 0,
        y: 0
    })
    const currentLayout = useRef<LayoutRectangle>({
        height: 0,
        width: 0,
        x: 0,
        y: 0
    });
    const [dragEnabled, setDragEnabled] = useState<boolean>(false);
    const defaultTranslateX = useRef(new Animated.Value(0)).current;
    const defaultTranslateY = useRef(new Animated.Value(0)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const lastOffset = useRef({ x: 0, y: 0 }).current;

    const resetPosition = () => {
        translateX.setValue(0)
        translateY.setValue(0)
    }

    const onGestureEvent = Animated.event<PanGestureHandlerEventPayload>([
        {
            nativeEvent: {
                translationX: dragEnabled ? translateX : defaultTranslateX,
                translationY: dragEnabled ? translateY : defaultTranslateY,
            }
        }
    ], {
        useNativeDriver: true,
        listener: (event) => {
            if (!dragEnabled) return;
            if (onDrag) onDrag(event.nativeEvent);
            currentLayout.current.x = initialLayout.current.x + event.nativeEvent.translationX;
            currentLayout.current.y = initialLayout.current.y + event.nativeEvent.translationY;
            handler.dragging({
                layout: currentLayout.current
            })
        }
    });

    const onHandlerStateChange = (event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
        if (!dragEnabled) return;
        if (event.nativeEvent.oldState === State.ACTIVE) {
            handler.finishDrag({
                layout: currentLayout.current
            });
            setDragEnabled(false);
            resetPosition();
        }
    }

    const onLongPress = () => {
        setDragEnabled(!dragEnabled);
    }

    const onPress = () => {
        if (dragEnabled) setDragEnabled(false);
    }

    const onLayout = (event: LayoutChangeEvent) => {
        initialLayout.current = event.nativeEvent.layout;
        currentLayout.current = { ...initialLayout.current };
    }

    return (
        <PanGestureHandler
            ref={ref}
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
            simultaneousHandlers={dragEnabled ? undefined : scrollViewRefs}>
            <Animated.View
                style={[
                    {
                        transform: [
                            { translateX: translateX },
                            { translateY: translateY },
                        ]
                    }
                ]}
                onLayout={onLayout}>
                <TouchableWithoutFeedback
                    onPress={onPress}
                    delayLongPress={200}
                    onLongPress={onLongPress}>
                    {children(dragEnabled)}
                </TouchableWithoutFeedback>
            </Animated.View>
        </PanGestureHandler>
    )
})