import api from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCart = async () => {
    return await AsyncStorage.getItem('cart')
}

export const deleteCart = async () => {
    await AsyncStorage.setItem('cart', null)
}

export const createOrder = async () => {
    const order = await getCart();
    return await api.post('/order', { order: order })
        .then(order => {
            await getCart();
            return order
        })
}

export const getUserOrders = async (token) => {
    return await api.post('/order', { token })
}

export const getOrderById = async (id, token) => {
    return await api.post('/order/getbyid', { id, token })
}

export const updateOrderStatus = async (id, token, status) => {
    return await api.patch('/order/changestatus', { id, token, status })
}

export const updateOrder = async (obj) => {
    return await api.put('/order', { obj })
}

export const cancelOrder = async (id, token) => {
    return await api.delete('/order', { id, token })
        .then(() => {
            await getCart();
            return { status: 200, message: "Order canceled" }
        })
        .catch(err => {
            console.log("Error canceling order")
            return { err, status: 500 }
        })

}

export const getActiveOrder = async (token) => {
    return await api.post('/order/activeorder', { token })
}

export const finishOrder = async (id, token) => {
    return await api.post('/order/finishorder', { id, token })
}