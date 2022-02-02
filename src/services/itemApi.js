import api from './api';

export const getAllItens = async () => {
    return await api.get('/item')
}

export const getItemById = async (id) => {
    return await api.post('/item/findbyid', { id })
}

export const getItemByName = async (name) => {
    return await api.post('/item/findbyname', { name })
}

export const getItemByCategory = async (category) => {
    return await api.post('/item/findbycategory', { category })
}

export const addNewItem = async (token, item) => {
    return await api.post('./item', { token, ...item })
}

export const deleteItem = async (token, id) => {
    //Delete não enviar headers por padrão, assim precisamos utilizar o "DATA" para enviar requests
    return await api.delete('/item', { data: { token, id } })
}

export const updateItem = (item, token) => {
    return await api.put('/item', { token, ...item })
}
