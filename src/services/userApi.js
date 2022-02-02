import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api'

//Authenticate user with email or document
export const authenticateUser = async (email, document, password) => {
    //Returns user token
    return await api.post('/user/login', { email, document, password })
        .then(res => {
            AsyncStorage.setItem('user', res)
        })
}
//Refresh the user token when is close to spoil
export const refreshToken = async (token) => {
    return await api.post('/user/refreshtoken', { token })
        .then(res => {
            AsyncStorage.setItem('user', res)
        })
}
//Logout user from api and delete data from storage
export const logoutUser = async () => {
    return await api.get('/user/logout').then(res => {
        AsyncStorage.setItem('user', null)
    })
}
//Create new user to the database (send an object if user data)
export const createUser = async (user) => {
    return await api.post('/user', {...user})
}
//Update user (pass an object with data)
export const updateUser = async (user, token) => {
    return await api.put('/user', {token, ...user})
}
//Add payment method
export const addPaymentMethod = async (token, payment) => {
    return await api.post('/user/addpayment', { token, payment })
}
//Get user by id
export const getUserById = async (token, id) => {
    return await api.post('/user/findbyid', { token, id })
}