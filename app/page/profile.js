import React from 'react';
import { Text, View } from 'react-native';
import Iconsvg from '../component/iconsvg'
import Header from '../component/header'
import GlobalStyle from '../style/style';

class Profile extends React.Component {
  render() {
    return (
      <View style={GlobalStyle.container}>
         <Header name="PROFILE"/>
        <Text>ini halaman Profile</Text>
        <Iconsvg icon="down"/>
      </View>
    );
  }
}

export default Profile