import { View, Text, Image } from 'react-native';
import React from 'react';
import { Button, Input, Spacer } from '../../components/StyledComponents'
import { authenticateUser } from '../../services/userApi'

export default function LoginView(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function onLogin() {
        const auth = await authenticateUser(email, password)
        console.log(auth.data)
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