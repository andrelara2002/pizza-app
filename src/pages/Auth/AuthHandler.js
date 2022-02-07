import { AsyncStorage } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getUser } from "../../services/UserApi";
import React from 'react'
import AppLoading from 'expo-app-loading'

export default function AuthHandler() {
    const [userToken, setToken] = React.useState({})
    const navigation = useNavigation()

    async function getData() {
        const token = await getUser()
        setToken(token)
    }

    function redirect() {
        if (userToken !== null) navigation.navigate('HomeStack')
        else navigation.navigate('LoginStack')
    }


    return <AppLoading
        startAsync={getData}
        onFinish={redirect}
        onError={console.warn}
    />

}