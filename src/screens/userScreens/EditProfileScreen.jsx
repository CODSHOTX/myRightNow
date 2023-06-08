import { editprofileStyle } from "./EditProfileStyle";
import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import Header from "../../components/Header";
import { Button } from "@rneui/base";
import { firebase } from "../../../firebaseConfig";

export default function EditProfileScreen({ navigation }) {
  const [fiName, setFName] = useState("");
  const [laName, setLName] = useState("");
  const [phNum, setPNum] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  useEffect(() => {
    // getting the user's existing details from Firestore
    const fetchUserData = async () => {
      try {
        const userDocRef = firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid);
        const doc = await userDocRef.get();
        if (doc.exists) {
          const userData = doc.data();
          setStreet(userData.street);
          setCity(userData.city);
          setFName(userData.fiName);
          setLName(userData.laName);
          setPNum(userData.phNum);
          setCountry(userData.country);
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = () => {
    // Update the user's information in Firestore
    const userDocRef = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid); // Replace 'userId' with the actual user ID
    userDocRef
      .update({
        fiName,
        laName,
        phNum,
        country,
        city,
        street,
      })
      .then(() => {
        alert("Profile updated successfully!");
        navigation.navigate("MyAccountScreen");
        // Handle any additional logic or UI updates after successful update
      })
      .catch((error) => {
        alert("Error updating profile:", error);
        // Handle the error and show an appropriate message to the user
      });
  };

  return (
    <SafeAreaView style={editprofileStyle.container}>
      <Header title="Edit Profile" type="arrow-left" navigation={navigation} />
      <View style={editprofileStyle.view}>
        <View style={editprofileStyle.view1}>
          <View>
            <TextInput
              defaultValue={fiName}
              style={editprofileStyle.TextInput}
              placeholder="First Name"
              onChangeText={setFName}
            />
          </View>
          <View>
            <TextInput
              value={laName}
              style={editprofileStyle.TextInput}
              placeholder="Last Name"
              onChangeText={setLName}
            />
          </View>

          <View>
            <TextInput
              defaultValue={phNum}
              style={editprofileStyle.TextInput}
              placeholder="Phone Number"
              onChangeText={setPNum}
            />
          </View>

          <View>
            <TextInput
              defaultValue={country}
              style={editprofileStyle.TextInput}
              placeholder="Country"
              onChangeText={setCountry}
            />
          </View>
          <View>
            <TextInput
              defaultValue={city}
              style={editprofileStyle.TextInput}
              placeholder="City"
              onChangeText={setCity}
            />
          </View>
          <View>
            <TextInput
              defaultValue={street}
              style={editprofileStyle.TextInput}
              placeholder="street"
              onChangeText={setStreet}
            />
          </View>
        </View>
        <View style={editprofileStyle.lview}>
          <Button
            title="Update"
            buttonStyle={editprofileStyle.styledButton}
            titleStyle={editprofileStyle.buttonTitle}
            onPress={handleUpdateProfile}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
