import React from 'react'
import { View, Text } from "react-native";
import { getToken, getUserById } from '../../services/userApi';
import { useDispatch } from 'react-redux';

export default function uthHandler(props) {
    const { navigation } = props
    const dispatch = useDispatch()

    const getData = async () => {
        const token = await getToken()
        console.log("Auth Handler loaded:", token)
        redirect(token)
    }
    React.useEffect(() => {
        getData()
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed!');
            getData()
        });
        return unsubscribe;
    }, [navigation]);

    const redirect = async (token) => {
        if (!token) {
            console.log("Token não encontrado")
            navigation.navigate('LoginView')
        }
        else {
            const userData = await (await getUserById(token))
            console.log('UserData: ', userData)
            if (userData.status === 200) {
                console.log('Usuário encontrando')
                dispatch({
                    type: 'STORE_USER_DATA',
                    payload: userData.data
                })
                dispatch({
                    type: 'STORE_TOKEN',
                    payload: token
                })
                navigation.navigate('HomeView')
            }
            else {
                console.warn('User not found')
                navigation.navigate('LoginView')
            }
        }
    }

    return <View>
        <Text>Loading</Text>
    </View>
}