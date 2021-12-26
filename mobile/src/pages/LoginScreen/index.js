import React, { useEffect } from 'react'
import { Container } from './styles'
import { Box, Button, Input, Text } from '../../global/styles'
import { TextInput, TouchableOpacity, Image, StatusBar } from 'react-native'
import General from '../../global/general'

const windowWidth = parseInt(General.dimens.windowWidth);

import BackgroundImage from '../../assets/images/img1.jpg'

export default function index() {
    useEffect(() => {
        
    },[]);

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+60 }}>
            <Text bold large marginBottom>Acesse sua conta</Text>
            
            <Text>Cuide bem de quem</Text>
            <Text>te faz bem, todos os dias.</Text>

            <TextInput 
                
            />

            <Box>
                <Input 
                    placeholder='E-mail'
                />
                <Input 
                    placeholder='Senha'
                />

                <Button purple>
                    <Text bold white>Entrar</Text>
                </Button>

                <Button>
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
