import React from 'react';
import { Text, View } from 'react-native';
import Iconsvg from '../component/iconsvg'

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>ini halaman home</Text>
        <Iconsvg icon="down"/>
      </View>
    );
  }
}

export default Home