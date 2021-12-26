import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'

const Stack = createStackNavigator();

export default function routes() {
    return (
        <NavigationContainer>        
            <Stack.Navigator
                initialRouteName='Login'
            >
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
