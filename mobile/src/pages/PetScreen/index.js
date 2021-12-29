import React, { useState } from 'react'
import { Container } from './styles'
import { FlatList, StatusBar, Text } from 'react-native'

import ListHeaderComponent from '../../components/ListHeaderComponent'
import ListEmptyComponent from '../../components/ListEmptyComponent'
import ListCardComponent from '../../components/ListCardComponent'
import BottomIndicator from '../../components/BottomIndicator'
import AlertModal from '../../components/AlertModal'
import CreatePetModal from '../../components/CreatePetModal'

export default function index() {
    const modalMessage = "Tem certeza que deseja remover seu pet?"
    const [showModal,setShowModal] = useState(false);
    const [showCreatePetModal,setShowCreatePetModal] = useState(false);
    const [id, setId] = useState(0);

    const data = [
        {
            id: '1',
            name: 'Josonel',
            gender: 0,
            specie: 'pato'
        },
        {
            id: '2',
            name: 'Melissa',
            gender: 1,
            specie: 'cobra'
        },
        {
            id: '3',
            name: 'Vik',
            gender: 1,
            specie: 'gato'
        }
    ]

    function removePet(){
        console.log(id);
    }

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+10}}>
            <FlatList
                data={data}
                keyExtractor={data => String(data.id)}

                renderItem={({ item : pet}) => (
                    <ListCardComponent 
                        key={pet.id}
                        id={pet.id}
                        title={pet.name}
                        rightText={pet.specie}
                        subtitle={pet.gender ? 'fêmea' : 'macho'}
                        status={null}
                        setShow={setShowModal}
                        setId={setId}
                    />
                )}
                ItemSeparatorComponent={() => (<Text/>)}

                ListEmptyComponent={() => <ListEmptyComponent desc='nenhum pet'/>}

                ListHeaderComponent={() => <ListHeaderComponent title='Meus pets' action={setShowCreatePetModal}/>}
                ListHeaderComponentStyle={{
                    marginBottom: 20,
                    paddingVertical: 10,
                }}

                ListFooterComponent={() => <BottomIndicator/>}
                ListFooterComponentStyle={{
                    position: 'relative',
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                }}

                style={{
                    paddingHorizontal: 20,
                    marginBottom: 80,
                }}
            />

            <AlertModal show={showModal} setShow={setShowModal} message={modalMessage} action={removePet}/>

            <CreatePetModal show={showCreatePetModal} setShow={setShowCreatePetModal}/>
        </Container>
    )
}
