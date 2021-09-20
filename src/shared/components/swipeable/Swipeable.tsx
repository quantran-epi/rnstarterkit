import { Box } from '@components/box'
import React, { FunctionComponent, useRef } from 'react'
import { GestureResponderEvent, Pressable } from 'react-native'
import { ISwipeableProps, SwipeableDirection } from './ISwipeable'

const DEFAULT_THRESHOLD = 50;
const DEFAULT_RESTRAINT = 50;
const DEFAULT_ALLOWTIME = 300;

export const Swipeable: FunctionComponent<ISwipeableProps> = ({
    children,
    directions,
    onSwipeDown,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    styles
}) => {
    const currentDirection = useRef<SwipeableDirection>();
    const swipeType = useRef<SwipeableDirection>();
    const startX = useRef<number>(0);
    const startY = useRef<number>(0);
    const distX = useRef<number>(0);
    const distY = useRef<number>(0);
    const threshold = useRef<number>(DEFAULT_THRESHOLD);
    const restraint = useRef<number>(DEFAULT_RESTRAINT);
    const allowedTime = useRef<number>(DEFAULT_ALLOWTIME);
    const elapsedTime = useRef<number>();
    const startTime = useRef<number>(0);

    const resetAll = () => {
        currentDirection.current = undefined;
        swipeType.current = undefined;
        startX.current = 0;
        startY.current = 0;
        distX.current = 0;
        distY.current = 0;
        elapsedTime.current = 0;
        startTime.current = 0;
    }

    const isEnabled = (direction: SwipeableDirection): boolean => {
        return directions.indexOf(direction) !== -1;
    }

    const onSwipeEnd = () => {
        switch (swipeType.current) {
            case "up": if (onSwipeUp && isEnabled("up")) onSwipeUp(); break;
            case "down": if (onSwipeDown && isEnabled("down")) onSwipeDown(); break;
            case "left": if (onSwipeLeft && isEnabled("left")) onSwipeLeft(); break;
            case "right": if (onSwipeRight && isEnabled("right")) onSwipeRight(); break;
        }
        resetAll();
    }

    const onTouchStart = (event: GestureResponderEvent) => {
        var touchobj = event.nativeEvent.changedTouches[0];
        currentDirection.current = undefined;
        swipeType.current = undefined;
        startX.current = touchobj.pageX;
        startY.current = touchobj.pageY;
        startTime.current = new Date().getTime();
    }

    const onTouchMove = (event: GestureResponderEvent) => {
        var touchobj = event.nativeEvent.changedTouches[0]
        distX.current = touchobj.pageX - startX.current // get horizontal dist traveled by finger while in contact with surface
        distY.current = touchobj.pageY - startY.current // get vertical dist traveled by finger while in contact with surface
        if (Math.abs(distX.current) > Math.abs(distY.current)) { // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
            currentDirection.current = (distX.current < 0) ? 'left' : 'right'
        }
        else { // else consider this a vertical movement
            currentDirection.current = (distY.current < 0) ? 'up' : 'down'
        }
    }

    const onTouchEnd = (event: GestureResponderEvent) => {
        elapsedTime.current = new Date().getTime() - startTime.current // get time elapsed
        if (elapsedTime.current <= allowedTime.current) { // first condition for awipe met
            if (Math.abs(distX.current) >= threshold.current && Math.abs(distY.current) <= restraint.current) { // 2nd condition for horizontal swipe met
                swipeType.current = currentDirection.current // set swipeType to either "left" or "right"
            }
            else if (Math.abs(distY.current) >= threshold.current && Math.abs(distX.current) <= restraint.current) { // 2nd condition for vertical swipe met
                swipeType.current = currentDirection.current // set swipeType to either "top" or "down"
            }
        }
        onSwipeEnd();
    }

    return (
        <Pressable
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onPressOut={onTouchEnd}>
            <Box styles={[styles]}>
                {children}
            </Box>
        </Pressable>
    )
}