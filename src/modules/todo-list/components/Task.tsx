import { ITask } from '@abstract/models/todo-list/ITask'
import React, { FunctionComponent } from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

interface TaskProps {
    data: ITask;
    onPress?: (data: ITask) => void;
    onDelete?: (taskId: string) => void;
}

export const Task: FunctionComponent<TaskProps> = ({
    data,
    onPress,
    onDelete
}) => {
    const onTaskPress = (): void => {
        if (onPress) onPress(data);
    }

    const onTaskDelete = (): void => {
        if (onDelete) onDelete(data.id);
    }
    
    return (
        <TouchableHighlight style={styles.container} onPress={onTaskPress} underlayColor="rgba(0,0,0,0.2)">
            <View style={styles.content}>
                <Text style={{ flex: 3 }}>{data.id}-{data.title}</Text>
                <View style={{ flex: 1 }}>
                    <Button title="Delete" onPress={onTaskDelete} />
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 5,
        backgroundColor: '#e6e6e6'
    }
})