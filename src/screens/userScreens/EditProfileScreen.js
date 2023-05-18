import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
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
                        placeholder="Alpha Sumareh"
                    />
                </View>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Alpha@gmail.com"
                    />
                </View>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="05332681470"
                    />
                </View>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="North Cyprus"
                    />
                </View>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Gazimagusa"
                    />
                </View>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Messan Apt. Salamis Road"
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

