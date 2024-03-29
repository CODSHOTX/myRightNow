import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { firebase } from "../../firebaseConfig";
import { View, SafeAreaView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Table, TableWrapper, Col } from "react-native-table-component";
import { Button } from "@rneui/base";
import { myaccountStyle } from "./screenStyles/MyAccountStyle";

export default function MyAccountScreen({ navigation }) {
  const [fiName, setFName] = useState("");
  const [laName, setLName] = useState("");
  const [phNum, setPNum] = useState("");
  const [emails, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            const userData = doc.data();
            setStreet(userData.street);
            setCity(userData.city);
            setEmail(userData.emails);
            setFName(userData.fiName);
            setLName(userData.laName);
            setPNum(userData.phNum);
            setCountry(userData.country);
            setProfileImage(userData.profileImage);
          }
        },
        (error) => console.log("Error fetching user data:", error)
      );

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const pickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.canceled) {
        // Upload the selected image to Firebase Storage and update the profile image
        const imageUrl = await uploadImage(result.assets[0].uri);
        setProfileImage(imageUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      // Create a unique file name for the image
      const filename = Date.now().toString();

      // Upload image to Firebase Storage
      const storageRef = firebase.storage().ref().child(filename);
      await storageRef.put(blob);

      // Get the image download URL
      const downloadURL = await storageRef.getDownloadURL();

      const currentUser = firebase.auth().currentUser;
      const userRef = firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid);
      await userRef.update({ profileImage: downloadURL });

      return downloadURL;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = () => {
    // Update the user's information in Firestore
    const userDocRef = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
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
      })
      .catch((error) => {
        alert("Error updating profile:", error);
        // message if error happens
      });
  };
  return (
    <SafeAreaView style={myaccountStyle.container}>
      <View style={myaccountStyle.view1}>
        <HomeHeader navigation={navigation} />
        <View>
          <Table>
            <TableWrapper style={myaccountStyle.tablew}>
              <TouchableOpacity onPress={pickImage}>
                <TableWrapper style={myaccountStyle.profile}>
                  <Avatar.Image
                    size={120}
                    source={
                      profileImage
                        ? { uri: profileImage }
                        : require("../images/avater.jpg")
                    }
                  />
                </TableWrapper>
              </TouchableOpacity>

              <TableWrapper style={myaccountStyle.detail}>
                <Col
                  data={[
                    fiName + " " + laName,
                    emails,
                    phNum,
                    country,
                    city,
                    street,
                  ]}
                  heightArr={[30, 30, 30, 30, 30, 30]}
                  width={200}
                />
              </TableWrapper>
            </TableWrapper>
          </Table>
        </View>
        <View style={myaccountStyle.view}>
          <Button
            title="Edit Profile"
            buttonStyle={myaccountStyle.styledButton}
            onPress={() => {
              navigation.navigate("EditProfileScreen");
            }}
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
