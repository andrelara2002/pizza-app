import AsyncStorage from '@react-native-async-storage/async-storage';
const api = require('../api.js')

const authenticateUser = async (email, document, password) => {
    const auth = await api.get('/user/login', {
        document, password, email
    })
    if (auth.status !== 200) return auth
    else {
        AsyncStorage.setItem('user', auth)
        return auth
    }
}

const getAllUsers = async (token) => {
    return await api.get('/user', { token });
}

const getUserById = async (token, id) => {
    return await api.get('/user/findbyid', { token, id })
}

const refreshToken = async (oldToken, id) => {
    return await api.get('/user/refreshtoken', { token: oldToken, id })
}

const logoutUser = async () => {
    await api.get('/user/logout')
        .then(() => {
            AsyncStorage.removeItem('user');
        })
        .catch(err => {
            console.log(err)
        })
}