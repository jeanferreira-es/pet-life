import React from 'react'
import { Modal, ActivityIndicator } from 'react-native'
import general from '../../global/general'
import { Container } from './styles'

export default function index({ show, setShow}) {
    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={show}
            statusBarTranslucent={true}
            onRequestClose={() => setShow(false)}
        >
            <Container>
                <ActivityIndicator size={80} color={general.colors.light_purple}/>
            </Container>
        </Modal>
    )
}
