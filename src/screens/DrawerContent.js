import React, { useState, useContext, useEffect } from "react";
import { firebase } from "../../firebaseConfig";
import { SafeAreaView, View, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "@rneui/themed";
import { drawerStyle } from "./screenStyles/DrawerContentStyle";

export default function DrawerContent(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
          setEmail(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);
  return (
    <SafeAreaView style={drawerStyle.container}>
      <DrawerContentScrollView {...props}>
        <View style={drawerStyle.view}>
          <Avatar
            rounded
            avatarStyle={drawerStyle.avatar}
            size={75}
            source={{
              uri: "https://www.citypng.com/photo/21035/hd-man-user-illustration-icon-transparent-png",
            }}
          />
          <View style={drawerStyle.view1}>
            <Text style={drawerStyle.text1}>Hello, {name.fiName}</Text>
            <Text style={drawerStyle.text2}>{email.emails}</Text>
          </View>

          <View style={drawerStyle.nview}>
            <View style={drawerStyle.lview}></View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          labelStyle={{ color: "#74D24F" }}
          icon={({ size }) => (
            <Icon
              type="material-comunity"
              name="credit-card"
              color="#74D24F"
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          labelStyle={{ color: "#74D24F" }}
          icon={({ size }) => (
            <Icon
              type="material-comunity"
              name="settings"
              color="#74D24F"
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          labelStyle={{ color: "#74D24F" }}
          icon={({ color, size }) => (
            <Icon
              type="material-comunity"
              name="help"
              color="#74D24F"
              size={size}
            />
          )}
        />
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign out"
        labelStyle={{ color: "#C9C9C7" }}
        onPress={() => firebase.auth().signOut()}
        icon={({ size }) => (
          <Icon
            type="material-comunity"
            name="logout"
            color="#74D24F"
            size={size}
          />
        )}
      />
    </SafeAreaView>
  );
}
