import {
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

export default function Button(
    { text, onPress, red, active = true, outline }
) {
    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#f9c415",
            backgroundColor: !outline ? "#f9c415" : "#ffffff00",
            width: '100%',
            padding: 15,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: red ? "#f53232" : "#3c2e02",
            fontWeight: 'bold',
            fontSize: 24,
        }
    })
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity >
    )
}