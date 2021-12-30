import React, { useRef, useState, useEffect } from 'react'
import { Modal, ToastAndroid } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateTimePick from '@react-native-community/datetimepicker'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Card, Box, Input, Text, Button } from '../../global/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Container } from './styles'
import api from '../../services/api'

export default function index({ show, setShow, updateAppointments }) {
    const [date,setDate] = useState(new Date(1598051730000));
    const [formatedDate, setFormatedDate] = useState('');
    const [hour,setHour] = useState(0);
    const [pet,setPet] = useState({});
    const [pets, setPets] = useState([]);
    const [showPick,setShowPick] = useState(false);
    const [desc,setDesc] = useState('');
    const [userId,setUserId] = useState(0);
    const hourPickerRef = useRef();
    const petsPickerRef = useRef();

    useEffect(() => {
        loadPets();
        loadUserData();
    },[]);

    async function loadPets(){
        try {
            const response = await api.get('/pets',{ params: {
                user_iduser: userId
            }});

            setPets([...response.data]);

            try {
                await AsyncStorage.setItem('@pets',JSON.stringify(response.data));
            } catch (error) {
                
            }
        } catch (error) {
            
        }

        // try {
        //     const petsData = JSON.parse(await AsyncStorage.getItem('@pets'));

        //     if(petsData != null){
        //         setPets(petsData);
        //     }
        // } catch (error) {
            
        // }
    }

    async function loadUserData(){
        try {
            const userData = JSON.parse(await AsyncStorage.getItem('@user'));

            console.log(userData);
            if(userData != null){
                setUserId(userData.iduser);
            }
        } catch (error) {
            
        }
    }

    async function createAppointment(){
        if(formatedDate.length > 0 && desc.length > 0){
            try {
                Date.parse(date);
                const response = await api.post('/appointments',{
                    status: 1,
                    description: desc,
                    date,
                    hour,
                    user_iduser: userId,
                    pet_idpet: pet.idpet
                });

                if(response.data.success){
                    ToastAndroid.show('Consulta agendada com sucesso.',ToastAndroid.SHORT);
                    setFormatedDate('');
                    setDesc('');
                    setHour(9);
                    setShow(false);
                    updateAppointments();
                }
            } catch (error) {
                
            }
        } else {
            ToastAndroid.show('Preencha todos os campos.',ToastAndroid.SHORT);
        }
    }

    const onChange = (dateTime) => {
        Date.parse(dateTime);
        const day = dateTime.getDate().toString();
        const month = (dateTime.getMonth()+1).toString();
        const year = dateTime.getFullYear().toString();

        // let formated = dateTime.getDate().toString()+'/'+(dateTime.getMonth()+1).toString()+'/'+dateTime.getFullYear().toString();

        const formated = day+'/'+month+'/'+year;

        console.log(formated);
        setDate(dateTime);
        setFormatedDate(formated);
        setShowPick(false);
      };

    function showHourPicker(){
        hourPickerRef.current.focus();
    }

    async function showPetsPicker(){
        await loadPets();
        petsPickerRef.current.focus();
    }

    function closeHourPicker(){
        hourPickerRef.current.blur();
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

                    <Text marginBottomMedium bold>Agendar consulta</Text>

                    <Box marginBottom marginTopLarge>

                        <Button pick marginBottom onPress={() => {showPetsPicker()}}>
                            <Text gray small alignLeftSelf>Pet <Text small>{pet.name}</Text></Text>
                        </Button>

                        <Box width100 spaceBetween row>
                            <Button pick halfWidth marginBottom onPress={() => setShowPick(true)}>
                                <Text gray small alignLeftSelf>Data <Text small>{formatedDate}</Text></Text>
                            </Button>
                            <Button pick halfWidth marginBottom onPress={() => showHourPicker()}>
                                <Text small alignLeftSelf>{hour} Horas</Text>
                            </Button>
                        </Box>
                        
                        <Input width100 style={{ height: 100}}
                            onChangeText={(text) => setDesc(text)}
                            placeholder='Descrição'
                            value={desc}
                        />
                    </Box>

                    <Button purple halfWidth onPress={() => createAppointment()} 
                        style={{
                            alignSelf: 'flex-end'
                        }}
                    >
                        <Text white>Agendar</Text>
                    </Button>
                </Card>

                {showPick && (
                    <DateTimePick
                        dateFormat='day month year'
                        value={date}
                        mode='date'
                        display='default'
                        onChange={(event, date) => onChange(date)}
                        minimumDate={new Date()}
                    />
                )}
                
                <Picker
                    ref={hourPickerRef}
                    selectedValue={hour}
                    onValueChange={(itemValue, itemIndex) => {
                        setHour(itemValue);
                    }}    
                >
                    <Picker.Item label='9h' value={9}/>
                    <Picker.Item label='10h' value={10}/>
                    <Picker.Item label='13h' value={13}/>
                    <Picker.Item label='14h' value={14}/>
                    <Picker.Item label='15h' value={15}/>
                    <Picker.Item label='16h' value={16}/>
                    <Picker.Item label='17h' value={17}/>
                    <Picker.Item label='18h' value={18}/>
                </Picker>

                <Picker
                    ref={petsPickerRef}
                    selectedValue={pet}
                    onValueChange={(itemValue, itemIndex) => {
                        setPet(itemValue);
                    }} 
                >
                    {pets.map((pet) => {
                        return (<Picker.Item key={pet.idpet} label={pet.name} value={pet}/>)
                    })}
                </Picker>
            </Container>
        </Modal>
    )
}
