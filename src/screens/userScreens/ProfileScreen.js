import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { colors, parameters, title } from "../../global/styles";
import Header from "../../components/Header"
import { Avatar } from 'react-native-paper';
import { Table, TableWrapper, Col } from 'react-native-table-component';
import { Button } from "@rneui/base";




function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header title="Profile" type="arrow-left" navigation={navigation} />

            <View >

                <Table >
                    <TableWrapper style={{ flexDirection: 'row' }}>
                        <TableWrapper style={styles.profile} >
                            <Avatar.Image size={120} source={require('../../images/ProfilePic/profile.jpg')} />
                        </TableWrapper>

                        <TableWrapper style={styles.detail}>
                            <Col data={['Fullname', 'Email', 'Phone No.', 'Country', 'City', 'Address']}
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

export default ProfileScreen