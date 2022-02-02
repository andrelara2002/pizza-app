import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Input from '../../components/input';

export default function LoginView({ email, password, setEmail, setPassword }) {

    return (
        <View>
            <Text>Login</Text>
            <Input
                label={"Email ou documento"}
                autocomplete={'email'}
                value={email}
                onChangeText={setEmail}
            />
        </View>
    )
}