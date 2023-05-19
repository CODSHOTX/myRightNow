import React, { useState, useContext, useEffect } from "react";
import { firebase } from "../../firebaseConfig";
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet,} from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "@rneui/themed";
import { colors } from "../global/styles";

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
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.buttons,
            paddingLeft: 20,
            paddingVertical: 10,
          }}
        >
          <Avatar
            rounded
            avatarStyle={styles.avatar}
            size={75}
            source={{
              uri: "https://www.citypng.com/photo/21035/hd-man-user-illustration-icon-transparent-png",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
              Hello, {name.fiName}
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}>{email.emails}</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                marginLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            ></View>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    borderWidth: 4,
    borderColor: colors.green,
  },
});
