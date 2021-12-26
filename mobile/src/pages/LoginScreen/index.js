import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { Box, Button, Input, Text } from '../../global/styles'
import { Image, StatusBar } from 'react-native'
import General from '../../global/general'

const windowWidth = parseInt(General.dimens.windowWidth);

import BackgroundImage from '../../assets/images/img1.jpg'

export default function index({ navigation }) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        
    },[]);

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+60 }}>
            <Text bold large marginBottomMedium>Acesse sua conta</Text>
            
            <Text>Cuide bem de quem</Text>
            <Text>te faz bem, todos os dias.</Text>

            <Box flex1 marginTopLarge>
                <Input 
                    onChangeText={text => setEmail(text)}
                    placeholder='E-mail'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoCapitalize='none'
                />

                <Input 
                    onChangeText={text => setPassword(text)}
                    placeholder='Senha'
                    secureTextEntry={true}
                />

                <Button purple marginTop onPress={() => navigation.push('BottomTabs',{})}>
                    <Text bold white>Entrar</Text>
                </Button>

                <Button lightPurple onPress={() => navigation.push('SingUp',{})}>
                    <Text>criar conta</Text>
                </Button>
            </Box>

            <Image  
                source={BackgroundImage} 
                resizeMode='contain' 
                style={{ width: windowWidth, height: windowWidth/1.2, position: 'absolute', bottom: 20 }}
            />
        </Container>
    )
}
