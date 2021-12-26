import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { Box, Button, Input, Text } from '../../global/styles'
import { StatusBar } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default function index() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState(0);
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');

    useEffect(() => {
        
    },[]);

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight }}>
            <Text bold large marginBottomMedium>Crie sua conta</Text>
            
            <Text>Na <Text purple bold>PetLife</Text>, a saúde do seu pet</Text>
            <Text>é nossa prioridade!</Text>

            <TextInput 
                keyboardType='number-pad'
                textContentType='telephoneNumber'/>

            <Box>
                <Input 
                    onChangeText={text => setName(text)}
                    placeholder='Nome e sobrenome'
                />

                <Input 
                    onChangeText={text => setEmail(text)}
                    placeholder='E-mail'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoCapitalize='none'
                />

                <Input 
                    onChangeText={text => setPhone(text)}
                    placeholder='Telefone'
                    keyboardType='number-pad'
                    textContentType='telephoneNumber'
                />

                <Input 
                    onChangeText={text => setPassword(text)}
                    placeholder='Senha'
                    secureTextEntry={true}
                />

                <Input 
                    onChangeText={text => setPassword2(text)}
                    placeholder='Confirmar senha'
                    secureTextEntry={true}
                />

                <Button black marginTop>
                    <Text bold white>Cadastrar</Text>
                </Button>
            </Box>
        </Container>
    )
}
