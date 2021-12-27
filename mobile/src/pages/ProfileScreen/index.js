import React from 'react'
import { Box, Button, Card, Text } from '../../global/styles'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { StatusBar } from 'react-native'
import { Container, Circle } from './styles'
import general from '../../global/general'

export default function index() {
    return (
        <Container style={{ paddingTop: StatusBar.currentHeight+15}}>
            <Box row spaceBetween horizontalAlign>
                <Button style={{ 
                    width: 40, 
                    height: 40,
                }}>
                    <FeatherIcons name='edit-2' size={20} color={general.colors.black}/>
                </Button>

                <Text large bold>Juliana Martins</Text>

                <Button style={{ 
                    width: 40, 
                    height: 40,
                    elevation: 0
                }}>
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
                        <Text bold xLarge>20</Text>
                    </Circle>
                </Card>
            </Box>

            <Box style={{ padding: general.dimens.mediumDistance}}>
                <Text gray marginBottomSmall small>E-mail</Text>
                <Card v10h15 lineBorderDashed>
                    <Text bold>claudiasantos@gmail.com</Text>
                </Card>
            </Box>

            <Box style={{ padding: general.dimens.mediumDistance}}>
                <Text gray marginBottomSmall small>Telefone</Text>
                <Card v10h15 lineBorderDashed>
                    <Text bold>(92) 9 9123-9533</Text>
                </Card>
            </Box>

            <Box verticalAlign style={{ width: '100%', marginHorizontal: '10%', position: 'absolute', bottom: 20, }}>
                <Card lineBorderDashed>
                    <Text gray small>Você recebe bônus a cada consulta concluída.</Text>
                </Card>
            </Box>
        </Container>
    )
}
