import React from 'react'
import General from '../../global/general'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import FeatherIcons from 'react-native-vector-icons/Feather'

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from '../HomeScreen'

export default function index() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor='#FFF'
            inactiveColor={General.colors.gray}
            barStyle={{ backgroundColor: '#FFF' }}
            labeled={false}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <FeatherIcons 
                            name='home' 
                            size={20} 
                            color={color} 
                            style={{ 
                                backgroundColor: General.colors.purple, 
                                borderRadius: 10, 
                                paddingHorizontal: 10.9, 
                                paddingVertical: 10, 
                                position: 'absolute', 
                                top: -8, 
                                width: 40, 
                                height: 40
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
