import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView } from 'react-native'
import *  as Animatable from 'react-native-animatable'
import { colors, parameters, title } from "../../global/styles";
import Header from "../../components/Header";
import { Icon, Button, SocialIcon } from "@rneui/base";


export default function EditProfileScreen({navigation}) {
    return (
        <View style={styles.container}>
               <Header
             title="Edit Profile" type="arrow-left" navigation={navigation}  />
             


            <View style={{ marginTop: 20 }}>
               
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Phone Number"
                    />
                </View>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Country"
                    />
                </View>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="City"
                    />
                </View>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Street address"
                    />
                </View>

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                <Button
                    title="Update"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
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

