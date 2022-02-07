import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginView from '../pages/Login/LoginView';
import HomeView from '../pages/Home/HomeView';

const RootStack = createStackNavigator(
    {
        LoginStack: LoginView,
        HomeStack: HomeView
    },
    {
        initialRouteName: 'LoginStack',
        headerMode: 'none',
    }
)

const RootStackContainer = createAppContainer(RootStack)
export default RootStackContainer;