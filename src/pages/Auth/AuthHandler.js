import React from 'react'
import { View, Text } from "react-native";
import AppLoading from 'expo-app-loading'
import { useNavigation } from '@react-navigation/native'
import { getToken, getUserById } from '../../services/userApi';
import { useDispatch } from 'react-redux';

export default function uthHandler(props) {
    let token = null;
    const { navigation } = props
    const dispatch = useDispatch()

    const getData = async () => {
        token = await getToken()
        console.log('Token: ', token)
        redirect()
    }

    React.useEffect(() => {
        getData()
    }, [])

    const redirect = async () => {
        if (token !== undefined) {
            const userData = await getUserById(token)
            console.log('UserData: ', userData)
            if (userData.data.status) {
                dispatch({
                    type: 'STORE_USER_DATA',
                    payload: userData
                })
                navigation.navigate('HomeView')
            }
            else console.warn('User not found')
        }
        else {
            navigation.navigate('LoginView')
        }
    }

    return <View>
        <Text>Loading</Text>
    </View>
}