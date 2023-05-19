import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView } from 'react-native'
import *  as Animatable from 'react-native-animatable'
import { colors, parameters, title } from "../../global/styles";
import Header from "../../components/Header";
import { Icon, Button, SocialIcon } from "@rneui/base";
import { updateProfile } from "../../global/controller";
import {firebase} from "../../../firebaseConfig";

export default function EditProfileScreen({navigation}) {
const  [fName, setFName]=useState('')
const [lName, setLName]=useState('')
    const [pNum, setPNum]=useState('')
    const [contry, setContry]=useState('')
const [sity, setSity]=useState('')
const [address, setAddress]=useState('')

   
useEffect(()=> {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
        if(snapshot.exists){
            setAddress(snapshot.data())
            setSity(snapshot.data())
            setFName(snapshot.data())
            setLName(snapshot.data())
            setPNum(snapshot.data())
            setContry(snapshot.data())
        } 
        else {
            console.log('User does not exist')
        }
    })
}, [])
const [fiName, setFname]=useState('')
const [laName, setLname]=useState('')
    const [phNum, setPhNum]=useState('')
    const [country, setCountry]=useState('')
const [city, setCity]=useState('')
const [street, setStreet]=useState(address.street)


    return (
        <View style={styles.container}>
               <Header
             title="Edit Profile" type="arrow-left" navigation={navigation}  />
             


            <View style={{ marginTop: 20 }}>
            <View >
                    <TextInput
                        value={fName.fiName}
                        style={styles.TextInput}
                        placeholder="First Name"
                        onChangeText={(fiName)=> setFname(fiName)}
                    />
                </View>
                <View >
                    <TextInput
                        value={lName.laName}
                        style={styles.TextInput}
                        placeholder="Last Name"
                        onChangeText={(laName)=> setLname(laName)}
                    />
                </View>
                
                <View >
                    <TextInput
                        value={pNum.phNum}
                        style={styles.TextInput}
                        placeholder="Phone Number"
                        onChangeText={(phNum)=> setPhNum(phNum)}
                    />
                </View>

                <View >
                    <TextInput
                        value={contry.country}
                        style={styles.TextInput}
                        placeholder="Country"
                        onChangeText={(country)=> setCountry(country)}
                    />
                </View>
                <View >
                    <TextInput
                        value={sity.city}
                        style={styles.TextInput}
                        placeholder="City"
                        onChangeText={(city)=> setCity(city)}
                    />
                </View>
                <View >
                    <TextInput
                        value={address.street}
                        style={styles.TextInput}
                        placeholder='street'
                        onChangeText={(street)=> setStreet(street)}
                    />
                </View>

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                <Button
                    title="Update"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={()=>updateProfile(fiName, laName, phNum, country, city, street, )}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    TextInput: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 40,
        borderRadius: 6,
        marginBottom: 20,
        padding: 10
    },

})

