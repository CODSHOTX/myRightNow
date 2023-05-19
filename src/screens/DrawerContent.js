import React, {useState, useContext, useEffect} from 'react';
import {firebase} from '../../firebaseConfig'
import{
    View,Text,Linking,Pressable, Alert,    Switch, StyleSheet
} from 'react-native';

import {
    DrawerContentScrollView,     DrawerItemList,    DrawerItem,} from '@react-navigation/drawer'

import {
    Avatar,    Button,    Icon} from '@rneui/themed'

import { colors } from '../global/styles';

    export default function DrawerContent(props){
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')

        useEffect(()=> {
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot)=>{
                if(snapshot.exists){
                    setName(snapshot.data())
                    setEmail(snapshot.data())
                } 
                else {
                    console.log('User does not exist')
                }
            })
        }, [])
        return(
            <View style={styles.container}>
                <DrawerContentScrollView {...props}>
                    <View>
                <View style= {{flexDirection:'row', alignItems:'center', 
                backgroundColor:colors.buttons, paddingLeft:20, paddingVertical:10}}>
                    <Avatar
                        rounded
                        avatarStyle={styles.avatar}
                        size={75}
                        source = {{uri:"https://www.citypng.com/photo/21035/hd-man-user-illustration-icon-transparent-png"}}
                    />
                    <View style={{marginLeft:10}}>
                        <Text style={{fontWeight:'bold',color:"white", fontSize:18}}>Hello, {name.fiName}</Text>
                        <Text style ={{color:"white",fontSize:14}}>{email.emails}</Text>
                    </View>

                    <View style={{flexDirection:'row', marginTop:10}}>
                        <View style ={{marginLeft:10, alignItems:"center", justifyContent:"center"}}>
                            
                        </View>

                    </View>
                    
                </View>
                </View>


                <DrawerItemList {...props} />
                <DrawerItem
                    label="Payment"
                    icon={({color, size})=>(
                        <Icon
                         type='material-comunity'
                         name='credit-card'
                         color={color}
                         size={size}
                         />
                    )}
                    />

<DrawerItem
                    label="Settings"
                    icon={({color, size})=>(
                        <Icon
                         type='material-comunity'
                         name='settings'
                         color={color}
                         size={size}
                         />
                    )}
                    />

<DrawerItem
                    label="Help"
                    icon={({color, size})=>(
                        <Icon
                         type='material-comunity'
                         name='help'
                         color={color}
                         size={size}
                         />
                    )}
                    />

    <View style={{borderTopWidth:1, borderTopColor:colors.grey5}}>
        <Text style={styles.preferences}>Preferences</Text>
        <View style={styles.switchText}>
                <Text style={styles.darkThemeText}>Dark Theme</Text>
                <View style ={{paddingRight:10}}>
                    <Switch
                        trackColor={{false:"#767577", true:"#81b0ff"}}
                        thumbColor= "#f4f3f4"
                    />

                </View>
        </View>
    </View>


                </DrawerContentScrollView>
                <DrawerItem
                    onPress={()=> firebase.auth().signOut()}
                    label = "Sign Out"
                    icon={({color, size})=>(
                        <Icon
                         type='material-comunity'
                         name='logout'
                         color={color}
                         size={size}
                         />
                    )}
                    />
            </View>
        )
    }
    const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        
        avatar:{
            borderWidth:4,
            borderColor:colors.green
            
        },
        preferences:{
            fontSize:16,
            color:colors.grey2,
            paddingTop:10,
            paddingLeft:20
        },

        switchText:{
            flexDirection:"row", 
            alignItems:"center",
            justifyContent:"space-between",
            paddingLeft:20, paddingVertical:5,
            paddingRight:10

        },

        darkThemeText:{
            fontSize:16,
            color:colors.grey2,
            paddingTop:10,
            paddingLeft:0,
            fontWeight:"bold"
        }


    })