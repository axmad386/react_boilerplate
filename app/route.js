import React  from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import HomePage from './page/home';
import SplashScreen from './SplashScreen';
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
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-contact" style={{fontSize:30}} color={tintColor} />
            )
        }
    },
    About: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-chatbubbles" style={{fontSize:30}} color={tintColor} />
            )
        }
    },
    ContactUs: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Contact Us',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-contacts" style={{fontSize:30}} color={tintColor} />
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
});
export default createAppContainer(SpScreen);