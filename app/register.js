import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Logo from './image/icon/logo.png';

export default class Register extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={{ flex:1, justifyContent:'flex-start', backgroundColor:'#ecf0f1'}}>
                <View style={{backgroundColor:'#d35400', height:hp(30), borderBottomLeftRadius:100, justifyContent:'center', alignItems:'center'}}>
                    <Image source={Logo} style={{width:wp(20), height:wp(20)}}/>
                    <View style={{position:'absolute', height:'70%', width:'80%', justifyContent:'flex-end', alignItems:'flex-end'}}>
                        <Text style={{fontSize:25, color:'#fff'}}>Register</Text>
                    </View>
                </View>
                <ScrollView>
                <View style={{flexDirection:'column', marginTop:hp(5), paddingHorizontal:'8%'}}>
                    <View style={styles.inputGroupRound}>
                        <View style={styles.inputIcon}>
                            <Icon name="md-person" style={{fontSize:30}}/>
                        </View>
                        <View style={{width:'85%'}}>
                            <TextInput style={styles.input} placeholder='Full name' placeholderTextColor="#B9B9B9"/>
                        </View>
                    </View>
                    <View style={styles.inputGroupRound}>
                        <View style={styles.inputIcon}>
                            <Icon name="ios-call" style={{fontSize:30}}/>
                        </View>
                        <View style={{width:'85%'}}>
                            <TextInput style={styles.input} placeholder='Phone' placeholderTextColor="#B9B9B9"/>
                        </View>
                    </View>
                    <View style={styles.inputGroupRound}>
                        <View style={styles.inputIcon}>
                            <Icon name="ios-mail" style={{fontSize:30}}/>
                        </View>
                        <View style={{width:'85%'}}>
                            <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#B9B9B9"/>
                        </View>
                    </View>
                    <View style={styles.inputGroupRound}>
                        <View style={styles.inputIcon}>
                            <Icon name="md-key" style={{fontSize:30}}/>
                        </View>
                        <View style={{width:'85%'}}>
                            <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#B9B9B9"/>
                        </View>
                    </View><View style={styles.inputGroupRound}>
                        <View style={styles.inputIcon}>
                            <Icon name="ios-log-in" style={{fontSize:30}}/>
                        </View>
                        <View style={{width:'85%'}}>
                            <TextInput style={styles.input} placeholder='Retype password' placeholderTextColor="#B9B9B9"/>
                        </View>
                    </View>
                    <View style={{marginTop:hp(10)}}>
                        <TouchableOpacity style={styles.btnBlockRounded} onPress={() => this.props.navigation.navigate('App')}>
                            <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{justifyContent:'center', flexDirection:'row', paddingVertical:hp(3)}}>
                    <Text>Your have an account ?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginPage')}>
                        <Text style={{color:'#d35400', fontWeight:'bold'}}> Login</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        color:'#000', 
        height:40, 
        fontSize:16,
    },
    inputGroupRound:{
        borderWidth:1, 
        borderColor:'#fff',
        backgroundColor:'#fff',
        borderRadius:25, 
        flexDirection:'row',
        width:'100%',
        marginVertical:10,
        elevation:4
    },
    inputIcon:{
        width:'15%', 
        justifyContent:'center', 
        alignItems:'center'
    },
    btnBlockRounded:{
        backgroundColor:'#d35400', 
        borderRadius:25, 
        justifyContent:'center', 
        paddingVertical:10, 
        alignItems:'center'
    }
})