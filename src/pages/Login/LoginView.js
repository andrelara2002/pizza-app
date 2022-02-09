import { View, Text, Image } from 'react-native';
import React from 'react';
import { Button, Input, Spacer } from '../../components/StyledComponents'
import { authenticateUser } from '../../services/userApi'

export default function LoginView({ navigation }) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState(null)

    React.useEffect(() => {
        console.log('Login mounted')
    })
    async function onLogin() {
        try {
            const auth = await authenticateUser(email, password)
            console.log(`Token: ${auth}`)
            if (auth) {
                console.log('Navegando para authhandler')
                navigation.navigate('AuthHandler')
            } else {
                console.log(`Got status: ${auth.status}`)
            }
        } catch (err) {
            setErrorMessage('Usuário ou senha incorretos')
        }
    }

    function onSignUp() {
        navigation.navigate('RegisterView')
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
                onPress={onSignUp}
            />
        </View>
    )
}