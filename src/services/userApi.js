import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api'

export const getToken = async () => {
    const res = await AsyncStorage.getItem('token')
    return res
}

//Authenticate user with email or document
export const authenticateUser = async (email, password) => {
    //Returns user token
    const res = await api.post('/user/login', { email: email, password: password })
    if (res.status === 200) {
        await AsyncStorage.setItem('token', res.data.token)
        console.log(res.data)
        return res.data.token
    }
    else return res
}
//Refresh the user token when is close to spoil
export const refreshToken = async (token) => {
    const res = await api.post('/user/refreshtoken', { token })
    await AsyncStorage.setItem('token', res.data.token)
    return res
}
//Logout user from api and delete data from storage
export const logoutUser = async () => {
    const res = await api.get('/user/logout')
    await AsyncStorage.removeItem('token')
    return res
}
//Create new user to the database (send an object if user data)
export const createUser = async (user) => {
    return await api.post('/user', { ...user })
}
//Update user (pass an object with data)
export const updateUser = async (user, token) => {
    return await api.put('/user', { token, ...user })
}
//Add payment method
export const addPaymentMethod = async (token, payment) => {
    return await api.post('/user/addpayment', { token, payment })
}
//Get user by id
export const getUserById = async (token, id) => {
    return await api.post('/user/findbyid', { token, id })
}

export const storeUser = async (user) => {
    await AsyncStorage.setItem('user', JSON.stringify(user))
}