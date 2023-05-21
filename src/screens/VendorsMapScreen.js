import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "./screenStyles/MapStyle";

export default function VendorsMapScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Header title="RightNOW" type="arrow-left" navigation={navigation} />
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={mapStyle.flex}
          initialRegion={{
            latitude: 35.146732,
            longitude: 33.908628,
            latitudeDelta: 0.05,
            longitudeDelta: 0.04,
          }}>
        </MapView>
      </View>
    </SafeAreaView>
  );
}
