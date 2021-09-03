import { ITask } from '@abstract/models/todo-list/ITask'
import React, { FunctionComponent, useState } from 'react'
import { Button, TextInput, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'

interface TaskFormProps {
    data?: ITask;
    onSave: (data: ITask) => void;
}

export const TaskForm: FunctionComponent<TaskFormProps> = ({
    onSave,
    data = { id: "", title: "", isDone: false }
}) => {
    const [title, setTitle] = useState<string>(data.title)
    const [isDone, setIsDone] = useState<boolean>(data.isDone)

    const _onSave = (): void => {
        let submittedData = { id: data.id, title, isDone } as ITask;
        onSave(submittedData);
    }

    return (
        <View>
            <TextInput value={title} onChangeText={setTitle} />
            <Switch value={isDone} onValueChange={setIsDone} />
            <Button title="Save" onPress={_onSave} />
        </View>
    )
}