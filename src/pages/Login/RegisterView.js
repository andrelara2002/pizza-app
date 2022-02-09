import React from 'react'
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native"
import { Button, Input, Spacer } from '../../components/StyledComponents'
import { authenticateUser, createUser } from "../../services/userApi"

export default function RegisterView({ navigation }) {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: "",
        phone: null,
        address: "",
        city: "",
        state: "",
        country: "",
        zip: ""
    })
    const [errorMessage, setErrorMessage] = React.useState('')
    const deviceHeight = Dimensions.get('screen').height

    const styles = StyleSheet.create({
        container: {
            padding: 20
        }
    })

    const handleSubmit = async () => {
        const { name, email, password } = state
        if (name && email && password) {
            const created = await createUser({ ...state })
            const token = await authenticateUser(email, password)
            created && token ? navigation.navigate('HomeView') : setErrorMessage('Erro interno no servidor')
        } else {
            console.warn('Dados incompletos')
            setErrorMessage("Dados incompletos")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Spacer size={deviceHeight / 3} />
            <Input label={"Nome"}
                value={state.name}
                placeholder={"Insira seu nome completo"}
                onChangeText={e => { setState({ ...state, name: e }) }} />
            <Input label={"Email"}
                value={state.email}
                placeholder={"Digite seu email"}
                onChangeText={e => { setState({ ...state, email: e }) }} />
            <Input label={"Senha"}
                value={state.password}
                placeholder={"Crie uma senha forte"}
                onChangeText={e => { setState({ ...state, password: e }) }} />
            <Input label={"Telefone"}
                value={state.phone}
                keyboardType={'numeric'}
                placeholder={"Insira seu nome completo"}
                onChangeText={e => { setState({ ...state, phone: e }) }} />
            <Input label={"CEP"}
                value={state.zip}
                keyboardType={'numeric'}
                placeholder={"Insira seu nome completo"}
                onChangeText={e => { setState({ ...state, zip: e }) }} />
            <Input label={"País"}
                value={state.country}
                placeholder={"Insira seu nome completo"}
                onChangeText={e => { setState({ ...state, country: e }) }} />
            <Input label={"Estado"}
                value={state.state}
                placeholder={"Insira seu nome completo"}
                onChangeText={e => { setState({ ...state, state: e }) }} />
            <Input label={"Cidade"}
                value={state.city}
                onChangeText={e => { setState({ ...state, city: e }) }}
                placeholder={"Insira seu nome completo"} />
            <Spacer size={20} />
            <Button
                text={"Cadastrar"}
                onPress={handleSubmit}
                onError={errorMessage}
            />
        </ScrollView>
    )
}