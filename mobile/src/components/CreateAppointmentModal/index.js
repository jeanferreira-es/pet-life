import React, { useRef, useState, useEffect } from 'react'
import { Modal } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateTimePick from '@react-native-community/datetimepicker'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Card, Box, Input, Text, Button } from '../../global/styles'
import { Container } from './styles'

export default function index({ show, setShow}) {
    const [date,setDate] = useState(new Date(1598051730000));
    const [formatedDate, setFormatedDate] = useState('');
    const [hour, setHour] = useState('Hora');
    const [showPick,setShowPick] = useState(false);
    const [desc,setDesc] = useState('');
    const hourPickerRef = useRef();

    const onChange = (dateTime) => {
        Date.parse(dateTime);
        const day = dateTime.getDate().toString();
        const month = dateTime.getMonth().toString();
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

                    <Button pick marginBottom onPress={() => {}}>
                            <Text gray small alignLeftSelf>Escolha um pet</Text>
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

                    <Button purple halfWidth
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
            </Container>
        </Modal>
    )
}
