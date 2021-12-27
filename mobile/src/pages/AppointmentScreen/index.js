import React from 'react'
import { Container } from './styles'
import { FlatList, StatusBar, Text } from 'react-native'

import ListFooterComponent from '../../components/ListFooterComponent'
import ListHeaderComponent from '../../components/ListHeaderComponent'
import ListEmptyComponent from '../../components/ListEmptyComponent'
import ListCardComponent from '../../components/ListCardComponent'

export default function index() {

    const data = [
        {
            id: '1',
            pet: 'Melissa',
            hour: 10,
            date: '16/12/2021'
        },
        {
            id: '2',
            pet: 'Josonel',
            hour: 14,
            date: '11/10/2021'
        }
    ]

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+10}}>
            <FlatList
                data={data}
                keyExtractor={data => String(data.id)}

                renderItem={({ item : appointment}) => (
                    <ListCardComponent 
                        key={appointment.id}
                        title={'Consulta do(a) '+appointment.pet}
                        subtitle={'agendado para às '+appointment.hour+'h'}
                        date={appointment.date}
                    />
                )}
                ItemSeparatorComponent={() => (<Text/>)}

                ListEmptyComponent={() => <ListEmptyComponent desc='nenhuma consulta'/>}

                ListHeaderComponent={() => <ListHeaderComponent title='Minhas consultas'/>}
                ListHeaderComponentStyle={{
                    marginBottom: 10,
                    paddingVertical: 10,
                }}

                ListFooterComponent={() => <ListFooterComponent/>}
                ListFooterComponentStyle={{
                    position: 'relative',
                    paddingVertical: 20,
                }}

                style={{
                    paddingHorizontal: 20,
                }}
            />
        </Container>
    )
}
