import {
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import { useSelector } from 'react-redux';

export default function Input({
    label, value, onChangeText, placeholder,
    autocomplete, secureTextEntry, textContentType,
    keyboardType
}) {
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            marginTop: 20
        },
        label: {
            marginBottom: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#3c2e02'
        },
        input: {
            fontSize: 24,
            borderRadius: 10,
            padding: 20,
            alignItems: 'center',
            textAlignVertical: 'center',
            backgroundColor: "#f5f5f5"
        }
    })

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={e => { onChangeText(e) }}
                autoComplete={autocomplete}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                textContentType={textContentType}
                keyboardType={keyboardType}
            />
        </TouchableOpacity>
    )
}