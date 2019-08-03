import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {
    render() {
      return (
        <View style={styles.header}>
            <View style={styles.containerTitleHeader}>
                <Text style={styles.titleHeader}>{this.props.name}</Text>
            </View>
            <View style={styles.containerBack}>
                <Icon name="ios-arrow-back" style={{fontSize:30}} color='black' />
            </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    header:{
        height: '8%',
        width:'100%',
        backgroundColor:'#fff',
        elevation: 5
    },
    containerTitleHeader:{
        width: '100%', 
        justifyContent:'center', 
        alignItems:'center',
        height:'100%'
    },
    titleHeader:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'
    },
    containerBack:{
        position:'absolute', 
        width:'15%', 
        height: '100%', 
        justifyContent:'center',
        alignItems:'center'
    }
})
