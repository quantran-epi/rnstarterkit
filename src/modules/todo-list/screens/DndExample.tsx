import { Box } from '@components/box'
import { Draggable, Droppable, useDrag, useDrop } from '@components/dnd'
import { IStylable } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, ViewStyle } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export const DndExample = () => {
    const scrollViewRef = React.createRef<ScrollView>();

    return (
        <ScrollView ref={scrollViewRef}>
            <Dropzone accept="red" styles={[style.dropzone, { backgroundColor: 'red' }]} />
            <Dropzone accept="blue" styles={[style.dropzone, { backgroundColor: 'blue' }]} />

            <DragItem type="orange" scrollViewRefs={[scrollViewRef]} />

            <Dropzone accept="brown" styles={[style.dropzone, { backgroundColor: 'brown' }]} />

            <DragItem type="blue" scrollViewRefs={[scrollViewRef]} />

            <Dropzone accept="orange" styles={[style.dropzone, { backgroundColor: 'orange' }]} />

            <DragItem type="red" scrollViewRefs={[scrollViewRef]} />

            {new Array(100).fill(1).map((e, i) => <DragItem key={i} type="green" scrollViewRefs={[scrollViewRef]} />)}
        </ScrollView>
    )
}

interface IDragItem extends IStylable<ViewStyle> {
    type: string;
    scrollViewRefs?: React.RefObject<ScrollView>[];
}

interface IDropzoneProps extends IStylable<ViewStyle> {
    accept: string;
}

const DragItem: FunctionComponent<IDragItem> = ({
    type,
    styles,
    scrollViewRefs
}) => {
    const [{ isDragging, isActivated }, dragHandler] = useDrag(
        () => ({
            type: type,
            canDrag: (monitor) => {
                return type !== 'orange';
            },
            connect: (monitor) => ({
                isDragging: monitor.isDragging(),
                isActivated: monitor.isActivated()
            })
        }),
        [type]
    )
    return (
        <Draggable handler={dragHandler} scrollViewRefs={scrollViewRefs}>
            <Box styles={[styles, {
                padding: 10, backgroundColor: type,
                opacity: (isDragging || isActivated) ? 0.5 : 1
            }]}>
                <Text>Drag me!</Text>
            </Box>
        </Draggable>
    )
}

const Dropzone: FunctionComponent<IDropzoneProps> = ({
    accept,
    children,
    styles
}) => {
    const [{ isOver, canDrop }, dropHandler] = useDrop(
        () => ({
            accept: accept,
            drop: (item) => {
                console.log('DROPPED', item)
            },
            canDrop: (item, monitor) => {
                return item.type !== "blue";
            },
            connect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }),
        []
    )
    return (
        <Droppable handler={dropHandler} styles={[styles, { opacity: isOver ? 0.5 : 1 }]}>
            {children}
        </Droppable>
    )
}

const style = StyleSheet.create({
    dropzone: {
        width: 300,
        height: 100,
    }
})