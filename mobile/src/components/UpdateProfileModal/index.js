import React, { useState, useEffect } from 'react'
import { Modal, ToastAndroid } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Card, Input, Text, Button, Box } from '../../global/styles'
import { Container } from './styles'
import api from '../../services/api'

import LoadingModal from '../LoadingModal'

export default function index({ show, setShow, user, setUser }) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
    }, [user])

    async function updateUser(){
        if(name.length > 0 && email.length > 0 && phone.length > 0){
            setLoading(true);
            try {
                const response = await api.patch('users',{
                    id: user.iduser,
                    name,
                    email,
                    phone
                });

                if(response.data.success){
                    const newUser = {
                        iduser: user.iduser,
                        name,
                        email,
                        phone,
                        adm: 0,
                        success: true
                    }

                    setUser(newUser);
                    
                    ToastAndroid.show('Dados atualizados com sucesso.',ToastAndroid.SHORT);
                }
            } catch (error) {
                
            } finally{
                setLoading(false);
            }
        } else {
            ToastAndroid.show('Preencha todos os campos.',ToastAndroid.SHORT);
        }
    }

    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={show}
            statusBarTranslucent={true}
            onRequestClose={() => setShow(false)}
        >
            <Container>
                <Card width100 largePadding shadow>
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

                    <Text marginBottomMedium bold>Atualizar perfil</Text>

                    <Box marginTopLarge marginBottom>
                        <Input width100
                            onChangeText={(text) => {setName(text)}}
                            placeholder='Nome'
                            value={name}
                        />

                        <Input width100
                            onChangeText={(text) => {setEmail(text)}}
                            placeholder='E-mail'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            autoCapitalize='none'
                            value={email}
                        />

                        <Input width100
                            onChangeText={(text) => {setPhone(text)}}
                            placeholder='Telefone'
                            keyboardType='number-pad'
                            textContentType='telephoneNumber'
                            value={phone}
                        />
                    </Box>
                
                    <Button purple halfWidth onPress={() => updateUser()} 
                        style={{
                            alignSelf: 'flex-end'
                        }}
                    >
                        <Text white>Atualizar</Text>
                    </Button>
                </Card>

                <LoadingModal show={loading} setShow={setLoading}/>
            </Container>
        </Modal>
    )
}
