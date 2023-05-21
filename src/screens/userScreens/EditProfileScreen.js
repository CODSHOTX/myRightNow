import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import { colors, parameters, title } from "../../global/styles";
import Header from "../../components/Header";
import { Icon, Button, SocialIcon } from "@rneui/base";
import { editprofileStyle } from "./EditProfileStyle";

export default function EditProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={editprofileStyle.container}>
      <Header title="Edit Profile" type="arrow-left" navigation={navigation} />

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput style={editprofileStyle.TextInput} placeholder="Phone Number" />
        </View>
        <View>
          <TextInput style={editprofileStyle.TextInput} placeholder="Country" />
        </View>
        <View>
          <TextInput style={editprofileStyle.TextInput} placeholder="City" />
        </View>
        <View>
          <TextInput style={editprofileStyle.TextInput} placeholder="Street address" />
        </View>
      </View>
      <View style={editprofileStyle.lview}>
        <Button
          title="Update"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>
    </SafeAreaView>
  );
}
