import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Image,
    AsyncStorage,
    ImageBackground
} from 'react-native';
import bgImage from './image/background/background.jpg'

class SplashScreen extends Component {

    _bootstrapAsync = async () => {
        this.props.navigation.navigate('App')
    };

    // Fetch the token from storage then navigate to our appropriate place
    componentDidMount() {
        setTimeout(() => {
            this._bootstrapAsync()
        }, 3000)
    };

    render() {
        return (
            <View style={{flex:1}}>
                <Image source={bgImage} style={{width: '100%', height: '100%'}}/>
            </View>
        );
    }
}

export default SplashScreen;