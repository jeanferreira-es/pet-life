import React from 'react'
import { Box, Card, Text } from '../../global/styles'
import { Circle } from './styles'

export default function index() {
    return (
        <Card lineBorder regularPadding>
            <Box flex1 row spaceAround>
                <Box horizontalAlign row style={{ width: 100 }}>
                    <Circle green/>
                    <Text small>Em consulta</Text>
                </Box>

                <Box horizontalAlign row style={{ width: 100 }}>
                    <Circle blue/>
                    <Text small>Concluído</Text>
                </Box>
            </Box>

            <Box row spaceAround>
                <Box horizontalAlign row style={{ width: 100 }}>
                    <Circle yellow/>
                    <Text small>Pendentea</Text>
                </Box>

                <Box horizontalAlign row style={{ width: 100 }}>
                    <Circle red/>
                    <Text small>Cancelado</Text>
                </Box>
            </Box>
        </Card>
    )
}
