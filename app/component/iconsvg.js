import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Down from '../image/icon/arrowdown.svg'

class iconsvg extends React.Component {
    render() {
        let size = 0;
        if(this.props.sm){
            size = 10;
        } else if(this.props.md){
            size = 20;
        } else if(this.props.lg){
            size = 25;
        } else {
            size = 15;
        }
        let icons = {
            down: <Down width={size} height={size} style={{ color: '#f80' }}/>
        }
    return (
      <View>
        {icons[this.props.icon]}
      </View>
    );
  }
}

export default iconsvg