import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api'

export const getUser = async () => {
    return await JSON.parse(AsyncStorage.getItem('user'))
}

//Authenticate user with email or document
export const authenticateUser = async (email, password) => {
    //Returns user token
    const res = await api.post('/user/login', { email: email, password: password })
    await AsyncStorage.setItem('user', JSON.stringify(res))
    return res
}
//Refresh the user token when is close to spoil
export const refreshToken = async (token) => {
    const res = await api.post('/user/refreshtoken', { token })
    await AsyncStorage.setItem('user', JSON.stringify(res))
    return res
}
//Logout user from api and delete data from storage
export const logoutUser = async () => {
    const res = await api.get('/user/logout')
    await AsyncStorage.setItem('user', JSON.stringify(res))
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