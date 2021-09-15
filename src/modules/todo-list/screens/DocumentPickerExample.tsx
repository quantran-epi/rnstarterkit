import { Container } from '@components/container'
import React from 'react'
import { Button } from 'react-native'
import DocumentPicker from 'react-native-document-picker'

export const DocumentPickerExample = () => {

    const pickImages = async () => {
        try {
            const res = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.images],
            })
            res.forEach(image => console.log(image.uri, image.name, image.size, image.type))
        } catch (err: any) {
            if (DocumentPicker.isCancel(err)) {
                console.log('user canceled picker')
            } else {
                throw err
            }
        }
    }

    const pickTextFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.plainText],
            })
            let textFile = res[0]
            if (textFile)
                console.log(textFile.uri, textFile.name, textFile.size, textFile.type)
        } catch (err: any) {
            if (DocumentPicker.isCancel(err)) {
                console.log('user canceled picker')
            } else {
                throw err
            }
        }
    }

    return (
        <Container>
            <Button title="Pick images" onPress={pickImages} />
            <Button title="Pick text file" onPress={pickTextFile} />
        </Container>
    )
}