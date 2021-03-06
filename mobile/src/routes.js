import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './pages/LoginScreen'
import SingUpScreen from './pages/SingUpScreen'
import BottomTabs from './pages/BottomTabs'

const Stack = createStackNavigator();

export default function routes() {
    return (
        <NavigationContainer>        
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name='SingUp' component={SingUpScreen} 
                    options={{ 
                        headerShown: true,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen name="BottomTabs" component={BottomTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
