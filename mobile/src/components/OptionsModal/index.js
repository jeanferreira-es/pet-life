import React, { useState } from 'react'
import { Modal, TouchableWithoutFeedback } from 'react-native'
import { Card, Text, Button } from '../../global/styles'
import { Container, HorizontalLine } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AlertModal from '../../components/AlertModal'

export default function index({show, setShow, navigation}) {
    const [alertMessage,setAlertMessage] = useState('');
    const [showAlertModal,setShowAlertModal] = useState(false);
    const [option, setOption] = useState('');

    async function closeApp(){
        try {
            await AsyncStorage.clear();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error) {
            console.log('erro ao limpar dados '+error);
        }
    }

    async function deleteAccount(){

    }

    function selectAction(op){
        setOption(op);
        setAlertMessage(op == 'close' ? 'Tem certeza que deseja encerrar esta sessão?' : 'Tem certeza que deseja excluir sua conta?');
        setShowAlertModal(true);
    }

    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={show}
            statusBarTranslucent={true}
            onRequestClose={() => setShow(false)}
            on
        >
            <TouchableWithoutFeedback onPress={() => setShow(false)}>
                <Container>
                    <Card shadow>
                        <Button transparent style={{ elevation: 0 }} onPress={() => selectAction('delete')}>
                            <Text alignLeftSelf>Excluir conta</Text>
                        </Button>

                        <HorizontalLine/>

                        <Button transparent style={{ elevation: 0 }} onPress={() => selectAction('close')}>
                            <Text alignLeftSelf>Sair do aplicativo</Text>
                        </Button>
                    </Card>
                </Container>
            </TouchableWithoutFeedback>

            <AlertModal show={showAlertModal} setShow={setShowAlertModal} message={alertMessage} action={option == 'close' ? closeApp : deleteAccount}/>
        </Modal>
    )
}
