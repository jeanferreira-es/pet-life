import React from 'react'
import { Text, Card, Box, Button} from '../../global/styles'

export default function index({ title, subtitle, date}) {
    return (
        <Card shadow spaceBetween style={{ marginHorizontal: 10}}>
            <Box spaceBetween row>
                <Text bold>{title}</Text>
                <Text>{date}</Text>
            </Box>
            <Box spaceBetween row>
                <Text>{subtitle}</Text>
                <Button style={{ elevation: 0, height: 5 }}>
                    <Text>x</Text>
                </Button>
            </Box>
        </Card>
    )
}
