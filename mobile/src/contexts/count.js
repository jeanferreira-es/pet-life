import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../services/api'

const CountContext = createContext({
    totalAppointments: 0,
    totalBonus: 0,
    totalPets: 0,
    setTotalAppointments: () => {},
    setTotalBonus: () => {},
    setTotalPets: () => {}
});

export const CountProvider = ({children}) => {
    const [totalAppointments,setTotalAppointments] = useState(0);
    const [totalBonus,setTotalBonus] = useState(0);
    const [totalPets,setTotalPets] = useState(0);

    useEffect(() => {
        loadingCountAppointments();
        loadingCountPets();
        loadingCountBonus();
    },[]);

    async function loadingCountAppointments(){
        try {
            const userData = JSON.parse(await AsyncStorage.getItem('@user'));

            if(userData != null){
                
                const response = await api.get('/appointments/count/'+userData.iduser);

                setTotalAppointments(response.data.total);
            }
        } catch (error) {
            
        }
    }

    async function loadingCountPets(){
        try {
            const userData = JSON.parse(await AsyncStorage.getItem('@user'));

            if(userData != null){                
                const response = await api.get('/pets/count/'+userData.iduser);

                setTotalPets(response.data.total);
            }
        } catch (error) {
            
        }
    }

    async function loadingCountBonus(){
        try {
            const userData = JSON.parse(await AsyncStorage.getItem('@user'));

            if(userData != null){                
                const response = await api.get('/bonus', { 
                    params: { 
                        user_isuser: userData.iduser
                    }
                });

                setTotalBonus(response.data.total);

                try {
                    await AsyncStorage.setItem('@bonus',JSON.stringify(response.data.total));
                } catch (error) {
                    
                }
            }
        } catch (error) {
            
        }
    }

    return (
        <CountContext.Provider value={{
            totalAppointments: totalAppointments,
            totalBonus: totalBonus,
            totalPets: totalPets,
            setTotalAppointments,
            setTotalBonus,
            setTotalPets
        }}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContext;