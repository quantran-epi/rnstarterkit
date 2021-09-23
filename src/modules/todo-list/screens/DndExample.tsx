import { Box } from '@components/box'
import { Draggable, useDrag, useDrop } from '@components/dnd'
import { IStylable } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { Text, ViewStyle } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export const DndExample = () => {
    const scrollViewRef = React.createRef<ScrollView>();
    const [{ isDragging }, dragHandler] = useDrag(
        () => ({
            type: "test",
            connect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        []
    )

    return (
        <ScrollView ref={scrollViewRef}>
            <Dropzone accept="test" styles={{ backgroundColor: 'red' }} />
            <Dropzone accept="test1" styles={{ backgroundColor: 'blue' }} />
            <Draggable handler={dragHandler} scrollViewRefs={[scrollViewRef]}>
                {(dragging: boolean) => <Box styles={{ padding: 10, backgroundColor: 'green', opacity: dragging ? 0.5 : 1 }}>
                    <Text>dadada</Text>
                    <Text>dadada</Text>
                    <Text>dadada</Text>
                </Box>}
            </Draggable>
            <Dropzone accept="test2" styles={{ backgroundColor: 'brown' }} />
            <Dropzone accept="test1" styles={{ backgroundColor: 'violet' }} />
        </ScrollView>
    )
}

interface IDropzoneProps extends IStylable<ViewStyle> {
    accept: string;
}

const Dropzone: FunctionComponent<IDropzoneProps> = ({
    accept,
    children,
    styles
}) => {
    const [{ isOver, canDrop }, dropHandler] = useDrop(
        () => ({
            accept: accept,
            connect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }),
        []
    )

    return (
        <Box styles={[{ width: 300, height: 200 }, styles]}>
            {children}
        </Box>
    )
}