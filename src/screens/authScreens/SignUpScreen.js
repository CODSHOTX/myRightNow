
import React,{useState} from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { colors } from "../../global/styles";
import Header from "../../components/Header" ;
import { Formik } from "formik";
import { Icon } from "@rneui/themed";
import * as Animatable from 'react-native-animatable';
import { Button } from "@rneui/base";

const initialValue ={pNumber:'', fName:'', lName:'', password:'', email:''}
const SignUpscreen = ({navigation}) => {

const[passwordFocussed, setPasswordFocussed] = useState(false)
const[passwordBlured, setPasswordBlured]=useState(false)
    return (
        <View style ={styles.container}>
             <Header title ="rightNOW" type="arrow-left" navigation={navigation} />
            <ScrollView keyboardShouldPersistTaps="always">
                <View style={styles.container}>
                <Text style ={styles.text1}>Sign-Up</Text> 
                </View>
                <Formik initialValues={initialValue} onSubmit={(value)=>{SignUpscreen(values)}}>
                    {(props)=>(
                        <View style={styles.view2}> 
                        <View>
                        <Text style={styles.text2}>New on RightNow</Text>
                        </View>                       
                            <View style={styles.view6}>
                                <TextInput
                                    placeholder=" Number"
                                    style = {styles.input1}
                                    keyboardType="number-pad"
                                    autoFocus = {true}
                                    onChangeText={props.handleChange('pNumber')}
                                    value={props.values.pNumber}
                                    />                            
                        </View>
                        <View style={styles.view6}>
                                <TextInput
                                    placeholder="First Name"
                                    style = {styles.input1}
                                    keyboardType="name-phone-pad"
                                    autoFocus = {false}
                                    onChangeText={props.handleChange('fName')}
                                    value={props.values.fName}
                                    />                            
                        
                       
                        </View>
                        <View style={styles.view6}>
                                <TextInput
                                    placeholder="Last Name"
                                    style = {styles.input1}
                                    keyboardType="name-phone-pad"
                                    autoFocus = {false}
                                    onChangeText={props.handleChange('lName')}
                                    value={props.values.lName}
                                    />                            
                        </View>
                        
                        <View style={styles.view10}>
                            <View>
                                <Icon
                                name="email"
                                style={styles.email}
                                color={colors.grey3}
                                type="material"
                                />
                            </View>
                            <View style={styles.view11}>
                                <TextInput
                                    placeholder="Email"
                                    style = {styles.input4}
                                    keyboardType="email-address"
                                    autoFocus = {false}
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                    />                            
                        </View>
                        </View>

                        <View style={styles.view14}>
                            <Animatable.View animation={passwordFocussed? "fadeInRight":"fadeInLeft"}duration={400}>
                                <Icon 
                                name="lock" 
                                color={colors.grey3}
                                type="material"
                              
                                />
                            </Animatable.View>
                            <TextInput
                                    placeholder="Password"
                                    style = {{flex:1, height:45, marginLeft:9}}
                                    keyboardType="email-address"
                                    autoFocus = {false}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    onFocus={()=>{setPasswordFocussed(true)}}
                                    onBlur={()=>{setPasswordBlured(true)}}
                                    />   
                                     <Animatable.View animation={passwordBlured?"fadeInLeft":"fadeInRight"}duration={400}>
                                <Icon 
                                name="visibility-off" 
                                color={colors.grey3}
                                type="material"
                                style={{marginRight:10}}
                                />
                            </Animatable.View> 
                          
                        </View>

                        <View style ={styles.view17}>
                            <Button
                                title= "Create my account"
                                buttonStyle ={styles.button1}
                                titleStyle ={styles.tittle1}
                                onPress={props.handleSubmit}
                            />
                        </View>
                        </View>
                     
                     
                    )}
                </Formik>
                <View style ={styles.view18}>
                    <Text style={styles.text5}>OR</Text>
                </View>
                <View style ={styles.view19}>
                    <View style ={styles.view20}>
                        <Text style={styles.text6}>Already have an account</Text>

                    </View>
                        <View style={styles.view21}>
                            <Button
                                title="Sign-In"
                                buttonStyle={styles.button2}
                                titleStyle={styles.title2}
                                onPress={()=>{navigation.navigate('SignInScreen')}}
                            
                            />

                        </View>
                </View>
            
                </ScrollView>
        </View>
    )
}

export default SignUpscreen

const styles = StyleSheet.create({
    container:{flex:1,
        backgroundColor:'white'},

    view1:{justifyContent:'center',
        alignItems: 'flex-start',
        marginTop:10,
        marginBottom:10,
        paddingHorizontal:15
    },

    text1:{fontSize:22, paddingLeft:15,
        color:colors.statusbar,
        fontWeight:'bold',
        paddingBottom:9 
          
    
    },

    view2:{justifyContent:'flex-start',
            backgroundColor:'white',
            paddingHorizontal:15
    },

    view3:{marginTop:5,
        marginBottom:10
    },

    text2:{fontSize:15,
        color:colors.grey2
    },
    View4:{flexDirection:'row',
            borderWidth:1,
            borderColor:  colors.grey4,
            borderRadius:12,
            paddingLeft:5
        },

    view5:{ marginLeft:30,
           marginTop:20
        },

    input1:{fontSize:16,
            
           
        },
    view6:{flexDirection:'row',
            borderWidth:1,
            borderColor:colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
        },

    view9:{marginLeft:0,
            maxWidth:"65%",
        },

    input3:{fontSize:16,
            marginLeft: 0,
            marginBottom:0
        },

    view10: {flexDirection:'row',
            borderWidth:1,
            borderColor:colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
        },

    email:{fontSize:24,
            padding:0,
            marginBottom:0,
            marginTop:11,
            marginLeft:2
        },

    view11:{marginLeft:30,
            marginLeft:30,
            maxWidth:"65%",
        },


    input4:{fontSize:16,
            marginLeft: -20,
            marginTop:10
        },

    view13:{flexDirection:'row',
            height:40,
        },


    view14:{
            borderWidth:1,
            borderRadius:12,
            borderColor:colors.grey4,
            flexDirection:'row',
            justifyContent:"space-between",
            alignContent:"center",
            alignItems:"center",
            paddingLeft:5,
            marginTop:20,
        },

    view15:{alignItems:'center',
            justifyContent:'center',
            marginTop:10
        },

    text3: {fontSize:13},

    view16:{flexDirection:'row'},

    text4:{textDecorationLine:'underline',
            color:'green',
            fontSize:13},

    button1:{backgroundColor:colors.statusbar,
            alignContent:'center',
            justifyContent:'center',
            borderRadius:12,
            borderWidth:1,
            borderColor:colors.statusbar,
            height:50,
            paddingHorizontal:20,
            width:'100%'
        },

    tittle1:{color:'white',
fontSize:20,
fontWeight:'bold',
alignItems:'center',
justifyContent:'center',
marginTop:-3},

        view17:{marginVertical:10,
        marginTop:90},

        view18:{flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:15,
        },

    text5: {fontSize:15,
            fontWeight:'bold',
    },

    view19:{backgroundColor:'white',
            paddingHorizontal:15,
    },

    view20:{marginTop:5},

    view21:{marginTop:5,
            alignItems:'flex-end',
        },

    button2:{backgroundColor:'white',
            alignContent:'center',
            justifyContent:'center',
            borderRadius:12,
            borderWidth:1,
            borderColor:colors.green,
            height:40,
            paddingHorizontal:20,

    },
text6:{color:colors.grey4, },

    title2:{color:colors.green,
        fontSize:16,
        fontWeight:"bold",
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3        
}


})