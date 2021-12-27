import React from 'react'
import General from '../../global/general'
import { Image, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import FeatherIcons from 'react-native-vector-icons/Feather'

const Tab = createMaterialBottomTabNavigator();

import archiveIcon from '../../assets/images/archiveIcon.png'
import activeArchiveIcon from '../../assets/images/activeArchiveIcon.png'
import catIcon from '../../assets/images/catIcon.png'
import activeCatIcon from '../../assets/images/activeCatIcon.png'
import userIcon from '../../assets/images/userIcon.png'
import activeUserIcon from '../../assets/images/activeUserIcon.png'

import HomeScreen from '../HomeScreen'
import AppointmentScreen from '../AppointmentScreen'
import PetScreen from '../PetScreen'
import ProfileScreen from '../ProfileScreen'


export default function index() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor='#FFF'
            inactiveColor={General.colors.dark_gray}
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
                                backgroundColor: focused ? General.colors.purple : 'rgba(0,0,0,0)', 
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

            <Tab.Screen
                name='Appointments'
                component={AppointmentScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View 
                            style={{
                                backgroundColor: focused ? General.colors.purple : 'rgba(0,0,0,0)',
                                borderRadius: 10, 
                                paddingHorizontal: 7, 
                                paddingVertical: 10, 
                                position: 'absolute', 
                                top: -8, 
                                width: 40, 
                                height: 40,
                                alignItem: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={ focused ? activeArchiveIcon : archiveIcon } 
                                width={25} 
                                resizeMode='contain'
                                style={{ 
                                    width: 25, 
                                }} 
                            />
                        </View>
                    )
                }}
            />  

            <Tab.Screen
                name='Pets'
                component={PetScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View 
                            style={{
                                backgroundColor: focused ? General.colors.purple : 'rgba(0,0,0,0)',
                                borderRadius: 10, 
                                paddingHorizontal: 7, 
                                paddingVertical: 10, 
                                position: 'absolute', 
                                top: -8, 
                                width: 40, 
                                height: 40,
                                alignItem: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={ focused ? activeCatIcon : catIcon } 
                                width={25} 
                                resizeMode='contain'
                                style={{ 
                                    width: 25, 
                                }} 
                            />
                        </View>
                    )
                }}
            />  

            <Tab.Screen 
                name='Profile' 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View 
                            style={{
                                backgroundColor: focused ? General.colors.purple : 'rgba(0,0,0,0)',
                                borderRadius: 10, 
                                paddingHorizontal: 7, 
                                paddingVertical: 10, 
                                position: 'absolute', 
                                top: -8, 
                                width: 40, 
                                height: 40,
                                alignItem: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={ focused ? activeUserIcon : userIcon } 
                                width={25} 
                                resizeMode='contain'
                                style={{ 
                                    width: 25, 
                                }} 
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
