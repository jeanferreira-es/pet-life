import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { FlatList, StatusBar, Text, ToastAndroid } from 'react-native'

import ListFooterComponent from '../../components/ListFooterComponent'
import ListHeaderComponent from '../../components/ListHeaderComponent'
import ListEmptyComponent from '../../components/ListEmptyComponent'
import ListCardComponent from '../../components/ListCardComponent'
import BottomIndicator from '../../components/BottomIndicator'
import AlertModal from '../../components/AlertModal'
import CreateAppointmentModal from '../../components/CreateAppointmentModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../services/api'

import LoadingModal from '../../components/LoadingModal'

export default function index() {
    const modalAlertMessage = "Tem certeza que deseja cancelar esta consulta?"
    const [showAlertModal,setShowAlertModal] = useState(false);
    const [showCreateAppointmentModal,setShowCreateAppointmentModal] = useState(false);
    const [userId,setUserId] = useState(0);
    const [loading,setLoading] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const [appointments,setAppointments] = useState([]);
    const [page,setPage] = useState(1);
    const [key,setKey] = useState(1);    
    const [id,setId] = useState(0);

    useEffect(() => {
        loadUserData();
        loadingAppointments();
    },[]);

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

    async function loadingAppointments(){
        setLoading(true);
        try {
            const userData = JSON.parse(await AsyncStorage.getItem('@user'));

            if(userData != null){
                const response = await api.get('/appointments/'+userData.iduser, { params: {
                    page: 1
                }});

                setAppointments([...response.data]);
                setKey(key+1);
            }
        } catch (error) {
            
        } finally{
            setLoading(false);
        }
    }

    async function cancelAppointment(){
        setLoadingModal(true);
        try {
            const response = await api.patch('/appointments', {
                status: 3,
                idappointment: id
            });

            if(response.data.success){
                ToastAndroid.show('Consulta cancelada com sucesso.',ToastAndroid.SHORT);
                setShowAlertModal(false);
                loadingAppointments();
            }
        } catch (error) {
            
        } finally{
            setLoadingModal(false);
        }
    }

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+10}}>
            <FlatList
                key={key}
                data={appointments}
                keyExtractor={data => String(data.idappointment)}

                renderItem={({ item : appointment}) => (
                    <ListCardComponent 
                        key={appointment.idappointment}
                        id={appointment.idappointment}
                        title={'Consulta d'.concat(appointment.gender ? 'a ' : 'o ')+appointment.name}
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

                refreshing={loading}
                onRefresh={() => loadingAppointments()}
            />

            <ListFooterComponent/>
            
            <AlertModal 
                show={showAlertModal} 
                setShow={setShowAlertModal} 
                message={modalAlertMessage} 
                action={cancelAppointment}
            />

            <CreateAppointmentModal show={showCreateAppointmentModal} setShow={setShowCreateAppointmentModal} updateAppointments={loadingAppointments}/>
            <LoadingModal show={loadingModal} setShow={setLoadingModal}/>
        </Container>
    )
}
