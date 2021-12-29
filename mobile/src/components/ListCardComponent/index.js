import React, { useEffect, useState } from 'react'
import { Text, Card, Box, Button} from '../../global/styles'
import FeatherIcons from 'react-native-vector-icons/Feather'
import General from '../../global/general'

export default function index({ id, title, subtitle, rightText, hour, status, setShow, setId}) {
    const [topColor,setTopColor] = useState('#FFF');

    useEffect(() => {
        if(status == null) return;
        
        switch(status){
            case 0: setTopColor(General.colors.green); break;
            case 1: setTopColor(General.colors.yellow); break;
            case 2: setTopColor(General.colors.blue); break;
            case 3: setTopColor(General.colors.red); break;
        }
    },[]);

    function onChangeDelete(){
        setShow(true);
        setId(id);
    }

    return (
        <Card shadow spaceBetween 
            style={{ 
                marginHorizontal: 10,
                borderTopColor: topColor,
                borderTopWidth: status != null ? 15 : 0
            }}
        >
            <Box spaceBetween marginBottom horizontalAlign row>
                <Text bold>{title}</Text>
                <Text small>{rightText}</Text>
            </Box>
            <Box spaceBetween row>
                <Text>{subtitle} <Text bold>{hour}</Text></Text>
                
                <Button onPress={() => onChangeDelete()} style={{ elevation: 0, height: 20 }}>
                    <FeatherIcons name='x' size={20} color="#DDD"/>
                </Button>
            </Box>
        </Card>
    )
}