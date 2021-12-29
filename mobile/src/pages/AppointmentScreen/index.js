import React, { useState } from 'react'
import { Container } from './styles'
import { FlatList, StatusBar, Text } from 'react-native'

import ListFooterComponent from '../../components/ListFooterComponent'
import ListHeaderComponent from '../../components/ListHeaderComponent'
import ListEmptyComponent from '../../components/ListEmptyComponent'
import ListCardComponent from '../../components/ListCardComponent'
import BottomIndicator from '../../components/BottomIndicator'
import AlertModal from '../../components/AlertModal'
import CreateAppointmentModal from '../../components/CreateAppointmentModal'

export default function index() {
    const modalAlertMessage = "Tem certeza que deseja cancelar esta consulta?"
    const [showAlertModal,setShowAlertModal] = useState(false);
    const [showCreateAppointmentModal,setShowCreateAppointmentModal] = useState(false);
    
    const [id,setId] = useState(0);

    const data = [
        {
            id: '1',
            pet: 'Melissa',
            hour: 10,
            date: '16/12/2021',
            gender: 1,
            status: 1
        },
        {
            id: '2',
            pet: 'Josonel',
            hour: 14,
            date: '11/10/2021',
            gender: 0,
            status: 2
        },
    ]

    function deleteAppointment(){
        console.log(id);
    }

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+10}}>
            <FlatList
                data={data}
                keyExtractor={data => String(data.id)}

                renderItem={({ item : appointment}) => (
                    <ListCardComponent 
                        key={appointment.id}
                        id={appointment.id}
                        title={'Consulta d'.concat(appointment.gender ? 'a ' : 'o ')+appointment.pet}
                        subtitle='agendado para às'
                        rightText={appointment.date}
                        hour={appointment.hour+'h'}
                        status={appointment.status}
                        setShow={setShowAlertModal}
                        setId={setId}
                    />
                )}
                ItemSeparatorComponent={() => (<Text/>)}

                ListEmptyComponent={() => <ListEmptyComponent desc='nenhuma consulta'/>}

                ListHeaderComponent={() => <ListHeaderComponent title='Minhas consultas' action={setShowCreateAppointmentModal}/>}
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

            <ListFooterComponent/>
            
            <AlertModal 
                show={showAlertModal} 
                setShow={setShowAlertModal} 
                message={modalAlertMessage} 
                action={deleteAppointment}
            />

            <CreateAppointmentModal show={showCreateAppointmentModal} setShow={setShowCreateAppointmentModal}/>
        </Container>
    )
}
