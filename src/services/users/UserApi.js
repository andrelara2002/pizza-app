import AsyncStorage from '@react-native-async-storage/async-storage';
const api = require('../api.js')

//Authenticate user with email or document
export const authenticateUser = async (email, document, password) => {
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
        AsyncStorage.setItem('user', res)
    })
}
//Create new user to the database (send an object if user data)
export const createUser = async ({
    name, email, password, document, phone, address,
    city, state, country, zip }) => {
    return await api.post('/user', {
        name, email, password, document, phone, address,
        city, state, country, zip
    })
}
//Update user (pass an object with data)
export const updateUser = async ({ name,
    email,
    password,
    document,
    phone,
    address,
    city,
    state,
    country,
    zip,
    token,
    paymentMethods,
    accessLevel }) => {
    return await api.put('/user', {
        name,
        email,
        password,
        document,
        phone,
        address,
        city,
        state,
        country,
        zip,
        token,
        paymentMethods,
        accessLevel
    })
}
//Add payment method
export const addPaymentMethod = async (token, payment) => {
    return await api.post('/user/addpayment', { token, payment })
}
//Get user by id
export const getUserById = async (token, id) => {
    return await api.post('/user/findbyid', { token, id })
}