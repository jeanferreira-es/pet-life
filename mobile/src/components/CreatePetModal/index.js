import React, { useRef, useState, useEffect, useContext } from 'react'
import { Modal, ToastAndroid } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Card, Input, Text, Button } from '../../global/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Container } from './styles'
import api from '../../services/api'

import LoadingModal from '../LoadingModal'
import CountContext from '../../contexts/count'

export default function index({ show, setShow, updatePets }) {
    const { totalPets, setTotalPets } = useContext(CountContext);

    const [name,setName] = useState('');
    const [gender,setGender] = useState(0);
    const [specie,setSpecie] = useState('');
    const [userId,setUserId] = useState(0);
    const [loading,setLoading] = useState(false);
    const genderPickerRef = useRef();

    useEffect(() => {
        loadUserData();
    },[]);

    async function loadUserData(){
        try {
            const userData = JSON.parse(await AsyncStorage.getItem('@user'));

            if(userData != null){
                setUserId(userData.iduser);
            }
        } catch (error) {
            console.log('Erro ao cadastrar pet '+error);
        }
    }

    function showGenderPicker(){
        genderPickerRef.current.focus();
    }

    function closeGenderPicker(){
        genderPickerRef.current.blur();
    }

    async function addPet(){
        if(name.length > 0 && specie.length > 0){
            setLoading(true);
            try {
                const response = await api.post('/pets',{
                    name, specie, gender, user_iduser: userId
                });

                if(response.data.success){
                    ToastAndroid.show('Pet cadastrado com sucesso.',ToastAndroid.LONG);
                    setShow(false);
                    setName('');
                    setSpecie('');
                    updatePets();
                    setTotalPets(totalPets+1);
                }
            } catch (error) {
                
            } finally{
                setLoading(false);
            }
        } else{
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

                    <Text marginBottomMedium bold>Cadastrar pet</Text>

                    <Input width100
                        onChangeText={(text) => {setName(text)}}
                        placeholder='Qual o nome?'
                        value={name}
                    />

                    <Input width100
                        onChangeText={(text) => {setSpecie(text)}}
                        placeholder='Qual o tipo (ex: cão, gato e etc)'
                        value={specie}
                    />

                    <Button pick marginBottom onPress={() => {showGenderPicker()}}>
                        <Text gray small alignLeftSelf>Genero <Text small>{gender ? 'Fêmea' : 'Macho'}</Text></Text>
                    </Button>

                    <Button purple halfWidth onPress={() => addPet()} 
                        style={{
                            alignSelf: 'flex-end'
                        }}
                    >
                        <Text white>Cadastrar</Text>
                    </Button>
                </Card>
                
                <Picker
                    ref={genderPickerRef}
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) => {
                        setGender(itemValue);
                    }}    
                >
                    <Picker.Item label='Macho' value={0}/>
                    <Picker.Item label='Fêmea' value={1}/>
                </Picker>
            </Container>
            <LoadingModal show={loading} setShow={setLoading}/>
        </Modal>
    )
}
