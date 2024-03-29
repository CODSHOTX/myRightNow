import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image, SafeAreaView } from "react-native";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
import CourierHeader from "../components/CourierHeader";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { firebase } from "../../firebaseConfig";

export default function DriverConsoleScreen({ navigation }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [fiName, setName]  = useState("");
  
  useEffect(() => {
    const userDocRef = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
  
    // user location and updates it real-time using onSnapshot
    const unsubscribe = userDocRef.onSnapshot(docSnapshot => {
      if (docSnapshot.exists) {
        const userData = docSnapshot.data();
        setLatitude(userData.latitude);
        setLongitude(userData.longitude);
        setName(userData.fiName);
      } else {
        console.log("No such document!");
      }
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <SafeAreaView style={driverconsoleStyle.container}>
      <CourierHeader navigation={navigation} />
      <View style={driverconsoleStyle.view}>
        <MapView
          style={driverconsoleStyle.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 35.146732,
            longitude: 33.908628,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            description="Courier"
            coordinate={{ latitude: latitude, longitude: longitude }}
          >
            <Image
              style={driverconsoleStyle.markerImg}
              source={require("../images/deliverybike_icon.png")}
            />
          </Marker>
        </MapView>
        <View style={driverconsoleStyle.view1}>
            <View style={{ flexDirection: "row" }}>
              <View style={driverconsoleStyle.imageBox}>
                <Image
                  style={driverconsoleStyle.img}
                  source={{
                    uri: "https://cdn0.iconfinder.com/data/icons/e-commerce-69/512/delivery-512.png",
                  }}
                />
              </View>
              <View style={driverconsoleStyle.viewBox}>
                <Text style={driverconsoleStyle.textBox}>Welcome {fiName}</Text>
                <Text style={driverconsoleStyle.textBox1}>
                  Courier is able to see his{"\n"} location and check the request
                </Text>
              </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
