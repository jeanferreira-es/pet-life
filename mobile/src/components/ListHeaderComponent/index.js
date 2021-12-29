import React from 'react'
import FeatherIcons from 'react-native-vector-icons/Feather'
import general from '../../global/general'
import { Text, Box, Button} from '../../global/styles'

export default function index({ title, action }) {
    

    return (
        <Box verticalAlign horizontalAlign row>
            <Text large bold>{title}</Text>
            
            <Button onPress={() => action(true)}
                style={{ 
                    width: 40, 
                    height: 40, 
                    position: 'absolute', 
                    right: 10
                }}
            >
                <FeatherIcons name='plus' size={20} color={general.colors.black}/>
            </Button>
        </Box>
    )
}
