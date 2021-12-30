import React, { useState, useEffect } from 'react'
import { Box, Button, Card, Text } from '../../global/styles'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { StatusBar } from 'react-native'
import { Container, Circle } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import general from '../../global/general'
import UpdateProfileModal from '../../components/UpdateProfileModal'
import OptionsModal from '../../components/OptionsModal'

export default function index({ navigation }) {
    const [showUpdateProfileModal,setShowUpdateProfileModal] = useState(false);
    const [showOptionsModal, setShowOptionsModal] = useState(false);
    const [bonus,setBonus] = useState(0);
    const [user,setUser] = useState({});

    useEffect(() => {
        loadUserData();
        loadTotalBonus();
    },[]);

    async function loadUserData(){
        try {
            const userData = JSON.parse(await AsyncStorage.getItem('@user'));
            if(userData != null){
                setUser(userData);
            }
        } catch (error) {
            console.log('erro ao carregar dados do usuário'+error);
        }
    }

    async function loadTotalBonus(){
        try {
            const totalBonus = JSON.parse(await AsyncStorage.getItem('@bonus'));
            if(totalBonus != null){
                setBonus(totalBonus);
            }
        } catch (error) {
            console.log('erro ao carregar dados do usuário'+error);
        }
    }

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+15}}>
            <Box row spaceBetween horizontalAlign>
                <Button onPress={() => setShowUpdateProfileModal(true)}
                    style={{ 
                        width: 40, 
                        height: 40,
                    }}
                >
                    <FeatherIcons name='edit-2' size={20} color={general.colors.black}/>
                </Button>

                <Text large bold>{user != null ? user.name : 'carregando...'}</Text>

                <Button onPress={() => setShowOptionsModal(true)} 
                    style={{ 
                        width: 40, 
                        height: 40,
                        elevation: 0
                    }}
                >
                    <FeatherIcons name='more-vertical' size={25} color={general.colors.black}/>
                </Button>
            </Box>

            <Box style={{ padding: general.dimens.mediumDistance}}>
                <Card lineBorder row>
                    <Box flex1>
                        <Text bold marginBottomSmall>Meus bônus</Text>
                        <Text small>Troque seus bônus por desconto em sua próxima consulta</Text>
                    </Box>

                    <Circle>
                        <Text bold xLarge>{bonus}</Text>
                    </Circle>
                </Card>
            </Box>

            <Box style={{ padding: general.dimens.mediumDistance}}>
                <Text gray marginBottomSmall small>E-mail</Text>
                <Card v10h15 lineBorderDashed>
                    <Text bold>{user != null ? user.email : 'carregando...'}</Text>
                </Card>
            </Box>

            <Box style={{ paddingHorizontal: general.dimens.mediumDistance}}>
                <Text gray marginBottomSmall small>Telefone</Text>
                <Card v10h15 lineBorderDashed regularPadding>
                    <Text bold>{user != null ? user.phone : 'carregando...'}</Text>
                </Card>
            </Box>

            <Box verticalAlign style={{ width: '100%', marginHorizontal: '10%', position: 'absolute', bottom: 20, }}>
                <Card lineBorderDashed>
                    <Text gray small>Você recebe bônus a cada consulta concluída.</Text>
                </Card>
            </Box>

            <UpdateProfileModal show={showUpdateProfileModal} setShow={setShowUpdateProfileModal} user={user} setUser={setUser}/>

            <OptionsModal show={showOptionsModal} setShow={setShowOptionsModal} navigation={navigation}/>
        </Container>
    )
}
