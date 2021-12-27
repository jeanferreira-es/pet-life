import React from 'react'
import { Container } from './styles'
import { FlatList, StatusBar, Text } from 'react-native'

import ListFooterComponent from '../../components/ListFooterComponent'
import ListHeaderComponent from '../../components/ListHeaderComponent'
import ListEmptyComponent from '../../components/ListEmptyComponent'
import ListCardComponent from '../../components/ListCardComponent'
import BottomIndicator from '../../components/BottomIndicator'

export default function index() {

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

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+10}}>
            <FlatList
                data={data}
                keyExtractor={data => String(data.id)}

                renderItem={({ item : pet}) => (
                    <ListCardComponent 
                        key={pet.id}
                        title={pet.name}
                        rightText={pet.specie}
                        subtitle={pet.gender ? 'fêmea' : 'macho'}
                        status={null}
                    />
                )}
                ItemSeparatorComponent={() => (<Text/>)}

                ListEmptyComponent={() => <ListEmptyComponent desc='nenhum pet'/>}

                ListHeaderComponent={() => <ListHeaderComponent title='Meus pets'/>}
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
        </Container>
    )
}
