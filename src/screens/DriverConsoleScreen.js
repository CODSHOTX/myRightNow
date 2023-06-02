import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image, SafeAreaView } from "react-native";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
import CourierHeader from "../components/CourierHeader";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function DriverConsoleScreen({ navigation }) {
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
            coordinate={{ latitude: 35.146801, longitude: 33.908648 }}
          >
            <Image
              style={driverconsoleStyle.markerImg}
              source={require("../images/deliverybike_icon.png")}
            />
          </Marker>
        </MapView>
        <View style={driverconsoleStyle.view1}>
          <TouchableOpacity onPress={() => {}}>
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
                <Text style={driverconsoleStyle.textBox}>View History</Text>
                <Text style={driverconsoleStyle.textBox1}>
                  History of all {"\n"}packages you delivered
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
