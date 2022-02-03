import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/services/redux'
import AppLoading from 'expo-app-loading';
import LoginView from './src/pages/Login/LoginView'

import {
  useFonts,
  OpenSans_700Bold,
  OpenSans_400Regular,
  OpenSans_300Light,
} from '@expo-google-fonts/open-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      height: "100%",
      //fontFamily: OpenSans_400Regular
    }
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <LoginView />
      </View>
    </Provider>
  );
}

