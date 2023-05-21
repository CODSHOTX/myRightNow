import React, { useState, useContext, useEffect } from "react";
import { firebase } from "../../firebaseConfig";
import { SafeAreaView, View, Text, Linking, Pressable, Alert, Switch, StyleSheet,} from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "@rneui/themed";
import { colors } from "../global/styles";
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
        <View
          style={drawerStyle.view}
        >
          <Avatar
            rounded
            avatarStyle={drawerStyle.avatar}
            size={75}
            source={{
              uri: "https://www.citypng.com/photo/21035/hd-man-user-illustration-icon-transparent-png",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={drawerStyle.text1}>
              Hello, {name.fiName}
            </Text>
            <Text style={{ color: "#74D24F", fontSize: 14 }}>{email.emails}</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={drawerStyle.lview}
            ></View>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

