import { View, Text, Image } from 'react-native';
import React from 'react';
import { Button, Input, Spacer } from '../../components/StyledComponents'
import { authenticateUser } from '../../services/userApi'

export default function LoginView({ navigation }) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState(null)

    async function onLogin() {
        const auth = await authenticateUser(email, password)
        console.log(auth)
        if (auth.status === 200) {
            navigation.navigate('AuthHandler')
        } else {
            setErrorMessage('Usuário ou senha incorretos')
        }
    }


    return (
        <View style={
            {
                justifyContent: 'flex-end',
                height: '100%',
                padding: 20
            }}>
            <Input
                label={"Email ou documento"}
                onError={errorMessage}
                autocomplete={'email'}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                label={"Senha"}
                autocomplete={'password'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Spacer size={20} />
            <Button
                text={"Entrar"}
                onPress={onLogin}
            />
            <Button
                text={'Cadastrar'}
                outline={true}
                onPress={() => { console.log('Cadastrando') }}
            />
        </View>
    )
}