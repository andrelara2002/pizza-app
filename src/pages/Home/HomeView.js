import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { getToken } from '../../services/userApi'

export default function HomeView({ navigation }) {

    const [user, setUser] = React.useState(null)
    const userData = useSelector(state => state)

    async function getData() {
        console.log('UserData: ', userData)
    }
    React.useEffect(() => {
        getData()
    }, [])
    return (
        <View>
            <Text>
                Home View
            </Text>
        </View>
    )
}