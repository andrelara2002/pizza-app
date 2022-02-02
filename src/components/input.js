import {
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import { useSelector } from 'react-redux';

export default function Input({
    label, value, onChangeText, placeholder,
    autocomplete
}) {
    const colors = useSelector(state => state)
    console.log(colors)
    const styles = StyleSheet.create({
        container: {
            height: 50,
            width: "100%",
            padding: 20,
        },
        label: {
            marginBottom: 10,
            fontSize: 16
        },
        input: {
            fontSize: 20,
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
                onChangeText={onChangeText}
                autoComplete={autocomplete}
                />
        </TouchableOpacity>
    )
}