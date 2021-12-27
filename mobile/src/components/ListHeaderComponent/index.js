import React from 'react'
import { Text, Box, Button} from '../../global/styles'

export default function index({ title, navigation }) {
    return (
        <Box verticalAlign horizontalAlign row>
            <Text large bold>{title}</Text>
            <Button style={{ width: 40, height: 40, position: 'absolute', right: 10}}>
                <Text large bold>+</Text>
            </Button>
        </Box>
    )
}
