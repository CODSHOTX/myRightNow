import React, { useState, useEffect } from "react";
import {firebase} from '../../firebaseConfig'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { colors, parameters, title } from "../global/styles";
import HomeHeader from "../components/HomeHeader"
import { Avatar } from 'react-native-paper';
import { Table, TableWrapper, Col } from 'react-native-table-component';
import { Button } from "@rneui/base";



export default function MyAccountScreen({navigation}){
    const [name, setName] = useState('')
    const [lName, setLName] = useState('')
    const [pNum, setPnum] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry]=useState('')
    const [city, setCity]=useState('')
    const [address, setAddress]=useState('')

    useEffect(()=> {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setName(snapshot.data())
                setLName(snapshot.data())
                setEmail(snapshot.data())
                setPnum(snapshot.data())
                setCountry(snapshot.data())
                setCity(snapshot.data())
                setAddress(snapshot.data())
            } 
            else {
                console.log('User does not exist')
            }
        })
    }, [])
    return (
        <View style={styles.container}>
          <HomeHeader navigation={navigation} />
            <View >

                <Table >
                    <TableWrapper style={{ flexDirection: 'row' }}>
                        <TableWrapper style={styles.profile} >
                            <Avatar.Image size={120} source={require('../images/avater.jpg')} />
                        </TableWrapper>

                        <TableWrapper style={styles.detail}>
                            <Col data={[name.fiName+lName.laName, email.emails, pNum.phNum, country.country, city.city, address.street]}
                                heightArr={[30, 30, 30, 30, 30, 30]} width={200} />
                        </TableWrapper>
                    </TableWrapper>

                </Table> 
            </View>
            <View style={{ marginTop: 30, marginHorizontal: 80, }}>

                <Button title="Edit Profile"
                    buttonStyle={parameters.styledButton}
                    onPress={() => {
                        navigation.navigate("EditProfileScreen")
                    }}></Button>
            </View>



        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    profile: {
        width: 150,
        height: 120,
        paddingTop: 30,
        marginLeft: 30,
    },

    detail: {
        margin: 6,
        paddingTop: 20,
    },

    edit: {
        fontSize: 18,
        backgroundColor: colors.green,
        backgroundColor: 'red'

    }
});
