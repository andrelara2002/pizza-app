import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/services/redux'

import LoginView from './src/pages/Login/LoginView'

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <StatusBar style="auto" />
        <LoginView />
      </View>
    </Provider>
  );
}

