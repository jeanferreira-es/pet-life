import React, { useContext } from 'react'
import { Box, Text, Card } from '../../global/styles'
import { Container, HorizontalLine } from './styles'
import { Image, StatusBar } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'

import Logo from '../../assets/images/logo.png'
import Syring from '../../assets/images/syringe.png'
import Fish from '../../assets/images/fish.png'

import CountContext from '../../contexts/count'

export default function index() {
    const { totalAppointments, totalBonus, totalPets } = useContext(CountContext);

    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+40}}>
            <Text large marginBottomRegular bold>PetLife</Text>
            <Image source={Logo} resizeMode='contain' style={{ width: 120, height: 120, position: 'absolute', right: 10, top: 30}}/>
            
            <Text>Cuide bem de quem</Text>
            <Text>te faz bem, todos os dias.</Text>

            <Box marginTopLarge>
                <Text marginBottomRegular bold>Próxima consulta</Text>

                <Card shadow row spaceBetween>
                    <Text bold>Melissa às 10h</Text>
                    <Text>16/12/2021</Text>
                </Card>

                <HorizontalLine/>

                <Card green row spaceBetween horizontalAlign v10h15 marginBottom>
                    <Box style={{ width: 70, height: 70}} verticalAlign horizontalAlign>
                        <Image source={Syring} resizeMode='contain' style={{ width: 70, height: 70}} width={70} style={{ position: 'absolute'}}/>
                        <Text bold xLarge>{totalAppointments}</Text>
                    </Box>
                    <Text bold>Consultas</Text>
                </Card>

                <Card blue row spaceBetween horizontalAlign v10h15 marginBottom>
                    <Box style={{ width: 70, height: 70}} verticalAlign horizontalAlign>
                        <FeatherIcons name='star' size={70} color='rgba(255,255,255,0.5)' style={{ position: 'absolute'}}/>
                        <Text bold xLarge>{totalBonus}</Text>
                    </Box>
                    <Text bold>Bônus</Text>
                </Card>

                <Card yellow row spaceBetween horizontalAlign v10h15 marginBottom>
                    <Box style={{ width: 70, height: 70}} verticalAlign horizontalAlign>
                        <Image source={Fish} resizeMode='contain' style={{ width: 70, height: 70}} width={80} style={{ position: 'absolute'}}/>
                        <Text bold xLarge>{totalPets}</Text>
                    </Box>
                    <Text bold>Pets</Text>
                </Card>
            </Box>
        </Container>
    )
}
