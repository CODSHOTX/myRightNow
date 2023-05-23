import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
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
        >
          {
            <>
              <Marker
                description="Delivery Person 1"
                coordinate={{ latitude: 35.146712, longitude: 33.908648 }}
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
              <Marker
                description="Delivery Person 2"
                coordinate={{ latitude: 35.143712, longitude: 33.901008 }}
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
              <Marker
                description="Delivery Person 3"
                coordinate={{ latitude: 35.14075, longitude: 33.913338 }}
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
            </>
          }
        </MapView>

        <FAB
          style={mapStyle.fab}
          icon={{ name: "add", color: "white" }}
          color="#74D24F"
        />
      </View>
    </SafeAreaView>
  );
};

export default VendorsMapScreen;
