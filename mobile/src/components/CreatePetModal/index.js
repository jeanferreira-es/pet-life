import React, { useRef, useState, useEffect } from 'react'
import { Modal } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Card, Input, Text, Button } from '../../global/styles'
import { Container } from './styles'

export default function index({ show, setShow}) {
    const [name,setName] = useState('');
    const [gender, setGender] = useState(0);
    const [specie, setSpecie] = useState('');
    const genderPickerRef = useRef();

    function showGenderPicker(){
        genderPickerRef.current.focus();
    }

    function closeGenderPicker(){
        genderPickerRef.current.blur();
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

                    <Button purple halfWidth
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
        </Modal>
    )
}
