import { createStore } from "redux";

const initialState = {
    user: null,
    token: null,
    app: {
        colors: {
            card: "#f5f5f5",
            text: "#0f0f0f",
            error: "#f53232",
            primary100: "#f9c415",
            primary40: "#3c2e02",
            secondary100: "#54d463",
            secondary40: "#061808"
        },
        language: 'pt-BR',
        data: {},
        theme: 'light'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_USER_DATA":
            return {
                ...state,
                user: action.payload
            }
        case "STORE_TOKEN":
            return {
                ...state,
                token: action.payload
            }
        case "STORE_COLORS":
            return {
                ...state,
                app: {
                    ...state.app,
                    colors: action.payload
                }
            }
        case "STORE_LANGUAGE":
            return {
                ...state,
                app: {
                    ...state.app,
                    language: action.payload
                }
            }
        case "CHANGE_THEME":
            return {
                ...state,
                app: {
                    ...state.app,
                    theme: action.payload
                }
            }
        default:
            return state
    }
}
export default createStore(reducer)