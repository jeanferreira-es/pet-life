import React, { useState } from 'react'
import { Container } from './styles'
import { Box, Button, Input, Text } from '../../global/styles'
import { StatusBar, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../services/api'

import LoadingModal from '../../components/LoadingModal'

export default function index({ navigation }) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');
    const [loading,setLoading] = useState(false);

    async function createUser(){
        if(name.length > 0 && email.length > 0 && phone.length > 0 &&
            password.length > 0 && password2.length > 0){
            
            setLoading(true);
            try {
                const response = await api.post('/users',{
                    name, email, phone, adm: 0, password
                });

                if(response.data.success){
                    const userData = { iduser: response.data.id, name, email, phone, adm: 0 };

                    await AsyncStorage.setItem('@user',JSON.stringify(userData));
                    ToastAndroid.show('Conta criada com sucesso, bem vindo!',ToastAndroid.SHORT);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'BottomTabs' }],
                    });
                }
            } catch (error) {
                console.log('erro ao cadastrar cliente '+error);
            } finally{
                setLoading(false);
            }
        } else {
            ToastAndroid.show('Preencha todos os campos',ToastAndroid.LONG);
        }
    }

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight }}>
            <Text bold large marginBottomMedium>Crie sua conta</Text>
            
            <Text>Na <Text purple bold>PetLife</Text>, a saúde do seu pet</Text>
            <Text>é nossa prioridade!</Text>

            <Box marginTopLarge>
                <Input 
                    onChangeText={text => setName(text)}
                    placeholder='Nome e sobrenome'
                    value={name}
                />

                <Input 
                    onChangeText={text => setEmail(text)}
                    placeholder='E-mail'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoCapitalize='none'
                    value={email}
                />

                <Input 
                    onChangeText={text => setPhone(text)}
                    placeholder='Telefone'
                    keyboardType='number-pad'
                    textContentType='telephoneNumber'
                    value={phone}
                />

                <Input 
                    onChangeText={text => setPassword(text)}
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={password}
                />

                <Input 
                    onChangeText={text => setPassword2(text)}
                    placeholder='Confirmar senha'
                    secureTextEntry={true}
                    value={password2}
                />

                <Button black marginTop onPress={() => createUser()}>
                    <Text bold white>Cadastrar</Text>
                </Button>
            </Box>

            <LoadingModal show={loading} setShow={setLoading} />
        </Container>
    )
}
