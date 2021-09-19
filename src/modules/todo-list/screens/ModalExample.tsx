import { Button } from '@components/button';
import { Container } from '@components/container'
import { Modal } from '@components/modal';
import React, { useState } from 'react'
import { Text } from 'react-native'

export const ModalExample = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <Container>
            <Button fullwidth title="Open modal" onPress={toggleModal} />

            <Modal
                innerModalProps={{
                    onBackButtonPress: toggleModal
                }}
                contentContainerStyles={{ height: 300 }}
                visible={modalVisible}
                headerComponent={<Modal.Header title="Header title" subtitle="Header subtitle" toolbox={[
                    { component: <Button color="transparent" icon="close" onPress={toggleModal} /> }
                ]} />}
                footerComponent={<Modal.Footer styles={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button title="OK" onPress={() => { console.log('modal confirmed') }} />
                    <Button title="Cancel" color="transparent" onPress={toggleModal} />
                </Modal.Footer>}>
                {new Array(50).fill(1).map((e, i) => <Text key={i}>This is modal content {i}</Text>)}
            </Modal>
        </Container>
    )
}