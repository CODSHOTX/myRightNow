import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "./screenStyles/MapStyle";
import Header from "../components/Header";
import { FAB } from "@rneui/base";
import { Button, Card, IconButton, List, ActivityIndicator, Title } from "react-native-paper";

const VendorsMapScreen = ({ navigation }) => {
  const status = 1;
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
          {status == 1 ? (
            <>
              <Marker
                description="Delivery Person 1"
                coordinate={{ latitude: 35.146801, longitude: 33.908648 }}
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
              <Marker
                description="Delivery Person 2"
                coordinate={{ latitude: 35.143685, longitude: 33.901008 }}
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
              <Marker
                description="Delivery Person 4"
                coordinate={{ latitude: 35.14165, longitude: 33.90581 }}
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
            </>
          ) : null}

          {status == 2 ? (
            <>
              <Marker
                description="Origin"
                coordinate={{ latitude: 35.146801, longitude: 33.908648 }}
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/origin.png")}
                />
              </Marker>
              <Marker
                description="Destination"
                coordinate={{ latitude: 35.14075, longitude: 33.913338 }}
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/destination.png")}
                />
              </Marker>
            </>
          ) : null}
        </MapView>

        {status == 1 ? (
          <FAB
          onPress={() => {
            navigation.navigate("AddressScreen");
          }}
            style={mapStyle.fab}
            icon={{ name: "add", color: "white" }}
            color="#74D24F"
          />
        ) : null}

        {status == 2 ? (
          <>
            <Card style={mapStyle.card}>
              <Card.Content>
                <List.Item
                  title="₺50.00"
                  description="Total Price"
                  left={() => (
                    <IconButton
                      icon="bike-fast"
                      size={32}
                      style={mapStyle.icon}
                      iconColor={mapStyle.icon.color}
                    />
                  )}
                  right={() => (
                    <View>
                      <Button mode="contained" style={mapStyle.confirmButton}>
                        Confirm
                      </Button>
                      <Button labelStyle={mapStyle.cancelButton}>Cancel</Button>
                    </View>
                  )}
                />
              </Card.Content>
            </Card>
          </>
        ) : null}
        {status == 3 ? (
          <View style={mapStyle.flexCenter} testID="searchDeliveryCard">
            <ActivityIndicator color={mapStyle.icon.color} animating={true} />
            <Title style={mapStyle.title}>
              Searching For a Corrier Close by.
            </Title>
            <Button mode="contained" style={mapStyle.cancelButton2}>
              Cancel
            </Button>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default VendorsMapScreen;
