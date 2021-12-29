import React from 'react'
import { Modal } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Box, Button, Card, Text } from '../../global/styles'
import { Container } from './styles'

export default function index({ show, setShow, message, action }) {
    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={show}
            statusBarTranslucent={true}
            onRequestClose={() =>  setShow(false)}
        >
            <Container>
                <Card largePadding shadow>
                    <Button onPress={() => setShow(false)}
                        style={{ 
                            elevation: 0, 
                            height: 20, 
                            position: 'absolute', 
                            right: 20, 
                            top: 20 
                        }}
                    >
                        <FeatherIcons name='x' size={20} color="#DDD"/>
                    </Button>

                    <Text marginBottomMedium bold>Aviso</Text>
                    <Text marginBottomMedium>{message}</Text>
                
                    <Box row spaceAround>
                        <Button halfWidth black onPress={() => setShow(false)}>
                            <Text white>Não</Text>
                        </Button>
                        
                        <Button halfWidth purple onPress={() => action()}>
                            <Text white>Sim</Text>
                        </Button>
                    </Box>
                </Card>
            </Container>
        </Modal>
    )
}
