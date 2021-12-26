import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './routes'

export default function index() {
    return (
        <>
            <StatusBar 
                translucent={true} 
                hidden={false} 
                showHideTransition='slide' 
                barStyle='dark-content' 
                backgroundColor='rgba(0,0,0,0)'
            />
            <Routes/>
        </>
    )
}
