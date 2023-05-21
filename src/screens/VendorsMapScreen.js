import React from "react";
import { SafeAreaView, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "./screenStyles/MapStyle";
import Header from "../components/Header";
import { FAB } from "@rneui/base";

const VendorsMapScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={mapStyle.safeview}>
      <Header title="RightNOW" type="arrow-left" navigation={navigation} />
      <View style={mapStyle.view}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyle.flex}
        initialRegion={{
          latitude: 35.146732,
          longitude: 33.908628,
          latitudeDelta: 0.05,
          longitudeDelta: 0.04,
        }}
      />
      <FAB
        style={mapStyle.fab} 
        icon={{ name: 'add', color: 'white' }}
        color="#74D24F"/>
      </View>
    </SafeAreaView>
  );
};

export default VendorsMapScreen;
