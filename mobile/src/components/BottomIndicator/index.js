import React from 'react'
import { View } from 'react-native'
import general from '../../global/general'

export default function index() {
    return (
        <View style={{
            width: '20%',
            height: 8,
            borderRadius: 4,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: general.colors.light_gray2
        }}/>
    )
}
