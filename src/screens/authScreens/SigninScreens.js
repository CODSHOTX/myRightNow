import React,{useState, useRef} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native'
import *  as Animatable from 'react-native-animatable'
import { colors, parameters, title } from "../../global/styles";
import Header from "../../components/Header"  
import { Icon, Button, SocialIcon } from "@rneui/base";

export default function SignInScreen({navigation}){
    const[textInput2Fossued, setTextInput2Fossued]=useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    return( 
        
        <View style ={styles.container}>
             <Header title ="rightNOW" type="arrow-left" navigation={navigation} />
             <View style ={{marginLeft:20, marginTop:10}}>
             <Text style ={title}>Sign-In</Text>
             </View>
            <View style={{alignItems:"center",marginTop:10}}>
                <Text style={styles.text1}>Please enter Your Email and Password</Text>
                <Text style={styles.text1}>Registered with your account</Text>
            </View>

             <View style={{marginTop:20}}>
                <View >
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    ref ={textInput1}
                    />
                </View>
                 <View style={styles.TextInput2}>
                <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={400}>
                <Icon
                name="lock"
                iconStyle={{color:colors.grey3}}
                type ="material"
                />
                </Animatable.View>
                <TextInput
                    style={{width:"80%"}}
                    placeholder="Password"
                    ref = {textInput2}
                    onFocus ={()=>{
                        setTextInput2Fossued(false)
                    }}
                    onBlur ={()=>{
                        setTextInput2Fossued(true)
                    }}
                    />
                <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={400} >
                
                <Icon
                name="visibility-off"
                iconStyle={{color:colors.grey3}}
                type ="material"
                style={{marginRight:10}}
                />
                </Animatable.View> 
                </View>
             </View>
             <View style={{marginHorizontal:20, marginVertical:15}}>
                <Button 
                title="Log in"
                buttonStyle = {parameters.styledButton}
                titleStyle = {parameters.buttonTitle}
                onPress={()=>{navigation.navigate('HomeScreen')}}
                 />
             </View>
             <View style = {{alignItems:"center", marginTop:5 }}>
                <Text style = {{...styles.text1, textDecorationLine:"underline"}}>Forgot Password ?</Text>
             </View>
             <View style={{alignItems:"center", marginTop:10, marginBottom:10}}>
                <Text style ={{fontSize:20, fontWeight:"bold"}}>OR</Text>
             </View>
             <View style={{marginHorizontal:10, marginTop:5}}>
                <SocialIcon 
                title="Sign In With Facebook"
                button
                type="facebook"
                style ={styles.SocialIcon}
                onPress ={()=>{}}
                />
             </View>
             <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon 
                title="Sign In With Google"
                button
                type="google"
                style ={styles.SocialIcon}
                onPress ={()=>{}}
                />
             </View>
             <View style = {{ marginTop:20, marginLeft:5 }}>
                <Text style = {{...styles.text1,}}>New on rightNOW ?</Text>
             </View>
             <View style ={{alignItems:"flex-end", marginHorizontal:20,}}>
                <Button 
                title="Create an account"
                buttonStyle ={styles.createButton}
                titleStyle ={styles.createButtonTitle}
                />
             </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        flex:1
    },
    text1:{
        color:colors.grey3,
        fontSize:13
    }, 
    TextInput:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        padding:10
    },
    TextInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        padding:10
       
    },
    SocialIcon :{
        width:'90%',
       
        height:50,
        
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#116530",
        height:40,
        paddingHorizontal:20,
        
    },
    createButtonTitle:{
        color:"#116530",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3,
        
    }
})