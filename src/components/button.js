import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { useSelector } from "react-redux";
export default function Button(
    { text, onPress, active = true, outline, onError }
) {
    const { primary100, primary40, error } = useSelector(state => state.app.colors)
    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            borderWidth: 1,
            borderColor: primary100,
            backgroundColor: !outline ? primary100 : "#ffffff00",
            width: '100%',
            padding: 15,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: onError ? error : primary40,
            fontWeight: 'bold',
            fontSize: 24,
        },
        error: {
            color: error,
            fontSize: 10,
            marginBottom: 10
        }
    })
    return (
        <View>
            {onError ? <Text>{onError}</Text> : <></>}
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity >
        </View>
    )
}