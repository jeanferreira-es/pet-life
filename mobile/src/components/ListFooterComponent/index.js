import React from 'react'
import { Box, Card, Text } from '../../global/styles'
import { Circle } from './styles'

export default function index() {
    return (
        <Card lineBorder regularPadding style={{ position: 'absolute', width: '90%', bottom: 20, marginHorizontal: '4.5%' }}>
            <Box flex1 row spaceAround>
                <Box horizontalAlign row style={{ width: 110 }}>
                    <Circle green/>
                    <Text small>Em consulta</Text>
                </Box>

                <Box horizontalAlign row style={{ width: 110 }}>
                    <Circle blue/>
                    <Text small>Concluído</Text>
                </Box>
            </Box>

            <Box row spaceAround>
                <Box horizontalAlign row style={{ width: 110 }}>
                    <Circle yellow/>
                    <Text small>Pendentea</Text>
                </Box>

                <Box horizontalAlign row style={{ width: 110 }}>
                    <Circle red/>
                    <Text small>Cancelado</Text>
                </Box>
            </Box>
        </Card>
    )
}
