import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginView from '../pages/Login/LoginView';
import HomeView from '../pages/Home/HomeView';
import AuthHandler from '../pages/Auth/AuthHandler';
import RegisterView from '../pages/Login/RegisterView'

const AuthStack = createStackNavigator({
    AuthHandler: {
        screen: AuthHandler,
        navigationOptions: {
            headerShown: false,
        }
    },
    LoginView: {
        screen: LoginView,
        navigationOptions: {
            headerShown: false
        }
    },
    RegisterView: {
        screen: RegisterView,
        navigationOptions: {
            headerShown: false
        }
    },
    HomeView: {
        screen: HomeView,
        navigationOptions: {
            headerShown: false
        }
    }
})
const Routes = createAppContainer(
    AuthStack
)
export default Routes