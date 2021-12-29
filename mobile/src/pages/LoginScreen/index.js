import React, { useState } from 'react'
import { Container } from './styles'
import { Box, Button, Input, Text } from '../../global/styles'
import { ImageBackground, StatusBar, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import General from '../../global/general'
import api from '../../services/api'

const windowHeight = parseInt(General.dimens.windowHeight)
import BackgroundImage from '../../assets/images/img1.jpg'
import LoadingModal from '../../components/LoadingModal'

export default function index({ navigation }) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    async function validateSession(){
        if(email.length > 0 && password.length > 0){

            setLoading(true);
            try {
                const response = await api.post('/sessions',{email: email, password: password});

                if(response.data.success && !response.data.adm){
                    try {
                        await AsyncStorage.setItem('@user',JSON.stringify(response.data));
                        
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'BottomTabs' }],
                        });
                    } catch (error) {
                        
                    }
                } else{
                    ToastAndroid.show('Nenhum cliente associado a esse e-mail e senha, verifique.',ToastAndroid.LONG);
                }
            } catch (error) {
                ToastAndroid.show('Houve um erro, tente novamente.',ToastAndroid.SHORT);
            } finally{
                setLoading(false);
            }
        } else{
            ToastAndroid.show('Preencha todos os campos',ToastAndroid.SHORT);
        }
    }

    return (
        <ImageBackground
            source={BackgroundImage}
            style={{ 
                flex: 1,
                backgroundColor: '#FFF'
            }}
            imageStyle={{
                bottom: -(windowHeight/1.7),
            }}
            resizeMode='contain'
        >
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

                    <Button purple marginTop marginBottom onPress={() => validateSession()}>
                        <Text bold white>Entrar</Text>
                    </Button>

                    <Button lightPurple onPress={() => navigation.push('SingUp',{})}>
                        <Text>criar conta</Text>
                    </Button>
                </Box>
            </Container>
            <LoadingModal show={loading} setShow={setLoading}/>
        </ImageBackground>
    )
}
