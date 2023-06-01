import React, { useState, useContext, useEffect } from "react";
import { firebase } from "../../firebaseConfig";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon } from "@rneui/themed";
import { drawerStyle } from "./screenStyles/DrawerContentStyle";
import * as Location from 'expo-location';
import { colors } from "../global/styles";

export default function DrawerContent(props) {
  const [fiName, setFName] = useState("");
  const [emails, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (locationEnabled) {
      getLocation();
    }
  }, [locationEnabled]);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);

     // Save location data to Firestore
  const { latitude, longitude } = location.coords;
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

 
  const currentUser = firebase.auth().currentUser;
  const userRef = firebase.firestore().collection('users').doc(currentUser.uid);
  await userRef.update({  latitude,
    longitude,
    timestamp, })


    .then(() => {
      console.log('Location data saved to Firestore');
    })
    .catch((error) => {
      console.error('Error saving location data to Firestore:', error);
    });

  };

  const handleToggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  
  
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
      <View style={styles.container}>
        <Text>Turn on your location</Text>
      <TouchableOpacity
        style={[styles.toggleButton, locationEnabled ? styles.activeButton : styles.inactiveButton]}
        onPress={handleToggleLocation}
      >
        <Text style={styles.buttonText}>{locationEnabled ? 'Turn Off' : 'Turn On'}</Text>
      </TouchableOpacity>

      {currentLocation && (
        <Text style={styles.locationText}>
          Latitude: {currentLocation.latitude}, Longitude: {currentLocation.longitude}
        </Text>
      )}
    </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  activeButton: {
    backgroundColor: "#74D24F",
  },
  inactiveButton: {
    backgroundColor: colors.grey4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});