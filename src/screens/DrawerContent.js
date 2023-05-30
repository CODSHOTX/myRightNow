import React, { useState, useContext, useEffect } from "react";
import { firebase } from "../../firebaseConfig";
import { SafeAreaView, View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon } from "@rneui/themed";
import { drawerStyle } from "./screenStyles/DrawerContentStyle";

export default function DrawerContent(props) {
  const [fiName, setFName] = useState("");
  const [emails, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  
  useEffect(() => {
  const fetchUserData = async () => {
    try {
      const userDocRef = firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const doc = await userDocRef.get();
      if (doc.exists) {
        const userData = doc.data();
       
        setEmail(userData.emails)
        setFName(userData.fiName);
       
        setProfileImage(userData.profileImage)
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  fetchUserData();
}, []);
  return (
    <SafeAreaView style={drawerStyle.container}>
      <DrawerContentScrollView {...props}>
        <View style={drawerStyle.view}>
          <Avatar
            rounded
            avatarStyle={drawerStyle.avatar}
            size={75}
            source={profileImage ? { uri: profileImage } : require("../images/avater.jpg")}
            
          />
          <View style={drawerStyle.view1}>
            <Text style={drawerStyle.text1}>Hello, {fiName}</Text>
            <Text style={drawerStyle.text2}>{emails}</Text>
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
