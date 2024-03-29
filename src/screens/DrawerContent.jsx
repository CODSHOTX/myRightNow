import React, { useState, useContext, useEffect } from "react";
import { firebase } from "../../firebaseConfig";
import { SafeAreaView, View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon } from "@rneui/themed";
import { drawerStyle } from "./screenStyles/DrawerContentStyle";
import * as Location from "expo-location";

export default function DrawerContent(props) {
  //states for getting user info and location
  const [fiName, setFName] = useState("");
  const [emails, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  //changes the location when turn on
  useEffect(() => {
    if (locationEnabled) {
      getLocation();
    }
  }, [locationEnabled]);

  //function to gets user location
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);

    // keeps location info to Firestore
    const { latitude, longitude } = location.coords;
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    const currentUser = firebase.auth().currentUser;
    const userRef = firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid);
    await userRef
      .update({ latitude, longitude, timestamp })

      .then(() => {
        console.log("Location data saved to Firestore");
      })
      .catch((error) => {
        console.error("Error saving location data to Firestore:", error);
      });
  };

  const handleToggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  //effect hook to fetch user data from Firestore
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

          setEmail(userData.emails);
          setFName(userData.fiName);

          setProfileImage(userData.profileImage);
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
            source={
              profileImage
                ? { uri: profileImage }
                : require("../images/avater.jpg")
            }
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
      </DrawerContentScrollView>
      <View style={drawerStyle.locview}>
        <Text>Turn on your location</Text>
        <TouchableOpacity
          style={[
            drawerStyle.toggleButton,
            locationEnabled
              ? drawerStyle.activeButton
              : drawerStyle.inactiveButton,
          ]}
          onPress={handleToggleLocation}
        >
          <Text style={drawerStyle.buttonText}>
            {locationEnabled ? "Turn Off" : "Turn On"}
          </Text>
        </TouchableOpacity>
      </View>

      <DrawerItem
        label="Sign out"
        labelStyle={drawerStyle.signout}
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
