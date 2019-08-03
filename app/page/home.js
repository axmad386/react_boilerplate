import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Iconsvg from '../component/iconsvg';
import Header from '../component/header';
import GlobalStyle from '../style/style';

class Home extends Component {
  render() {
    return (
      <View style={GlobalStyle.container}>
        <Header name="HOME"/>
        <Text>ini halaman home</Text>
        <Iconsvg icon="down"/>
      </View>
    );
  }
}

export default Home