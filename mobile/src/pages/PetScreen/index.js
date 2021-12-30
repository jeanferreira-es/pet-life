import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { FlatList, StatusBar, Text, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ListHeaderComponent from '../../components/ListHeaderComponent'
import ListEmptyComponent from '../../components/ListEmptyComponent'
import ListCardComponent from '../../components/ListCardComponent'
import BottomIndicator from '../../components/BottomIndicator'
import AlertModal from '../../components/AlertModal'
import CreatePetModal from '../../components/CreatePetModal'

import api from '../../services/api'
import LoadingModal from '../../components/LoadingModal'

export default function index() {
    const modalMessage = "Tem certeza que deseja remover seu pet?"
    const [showModal,setShowModal] = useState(false);
    const [showCreatePetModal,setShowCreatePetModal] = useState(false);
    const [userId,setUserId] = useState(0);
    const [loading,setLoading] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const [pets,setPets] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        loadUserData();
    },[]);

    useEffect(() => {
        loadingPets();
    },[userId]);

    async function loadUserData(){
        if(loading) return;

        setLoading(true);
        try {
            const userData = JSON.parse(await AsyncStorage.getItem('@user'));

            if(userData != null){
                setUserId(userData.iduser);
            }
        } catch (error) {
            console.log('Erro ao cadastrar pet '+error);
        } finally{
            setLoading(false);
        }
    }

    async function loadingPets(){
        setLoading(true);
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
            
        } finally{
            setLoading(false);
        }
    }

    async function removePet(){
        setLoadingModal(true);
        try {
            const response = await api.delete('/pets', { params: {
                idpet: id
            }});

            if(response.data.success){
                ToastAndroid.show('Pet removido com sucesso.',ToastAndroid.SHORT);
                setShowModal(false);
                loadingPets();
            }

        } catch (error) {
            
        } finally{
            setLoadingModal(false);
        }
    }

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+10}}>
            <FlatList
                data={pets}
                keyExtractor={data => String(data.idpet)}

                renderItem={({ item : pet}) => (
                    <ListCardComponent 
                        key={pet.idpet}
                        id={pet.idpet}
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
                refreshing={loading}
                onRefresh={() => loadingPets()}
            />

            <AlertModal show={showModal} setShow={setShowModal} message={modalMessage} action={removePet}/>
            <CreatePetModal show={showCreatePetModal} setShow={setShowCreatePetModal} updatePets={loadingPets}/>
            <LoadingModal show={loadingModal} setShow={setLoadingModal}/>
        </Container>
    )
}
