import React  from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import HomePage from './page/home';
import ProfilePage from './page/profile';
import SplashScreen from './SplashScreen';
import Login from './login';
import Registers from './register';
import ForgotPassword from './forgotPassword';
import Icon from 'react-native-vector-icons/Ionicons';

const TabApp = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-home" style={{fontSize:30}} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-contact" style={{fontSize:30}} color={tintColor} />
            )
        }
    },
    Component: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Component',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-albums" style={{fontSize:30}} color={tintColor} />
            )
        }
    },
    Page: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Page',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-browsers" style={{fontSize:30}} color={tintColor} />
            )
        }
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        style: {
            backgroundColor: 'black',
            height: 53
        },
        tabStyle: {
            padding: 2
        },
        labelStyle: {
            fontSize: 10,
            margin: 0,
            padding: 0,
            bottom: 3
        },
        activeTintColor: '#D4AF37',
        inactiveTintColor: '#FFF',
        showIcon: true,
        showLabel: true,
    }
});

const Navigasi = createStackNavigator({
    index: TabApp,
});

const SpScreen = createSwitchNavigator({
    AuthLoading: SplashScreen,
    App: Navigasi,
    LoginPage: Login,
    RegisterPage:Registers,
    ForgotPasswordPage:ForgotPassword
});
export default createAppContainer(SpScreen);