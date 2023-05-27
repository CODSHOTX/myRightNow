import React, { useState } from "react";
import { SafeAreaView, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "./screenStyles/MapStyle";
import Header from "../components/Header";
import { FAB } from "@rneui/base";
import { Button, Card, List, ActivityIndicator, Title } from "react-native-paper";

const VendorsMapScreen = ({ navigation }) => {
  const [state, setState] = useState(1);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerPress = (markerData) => {
    setSelectedMarker(markerData);
  };

  const handleCancel = () => {
    setSelectedMarker(null);
  };

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
          {state === 1 ? (
            <>
              <Marker
                description="Delivery Person 1"
                coordinate={{ latitude: 35.146801, longitude: 33.908648 }}
                onPress={() =>
                  handleMarkerPress({
                    name: "John Doe",
                    plate: "XYZ1234",
                    phone: "123-456-7890",
                    rate: "Good",
                    photo: require("../images/deliveryperson1.png"),
                  })
                }
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
              <Marker
                description="Delivery Person 2"
                coordinate={{ latitude: 35.143685, longitude: 33.901008 }}
                onPress={() =>
                  handleMarkerPress({
                    name: "Mike Lee",
                    plate: "XYZ2229",
                    phone: "523-251-4091",
                    rate: "Bad",
                    photo: require("../images/deliveryperson1.png"),
                  })
                }
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
              <Marker
                description="Delivery Person 3"
                coordinate={{ latitude: 35.14075, longitude: 33.913338 }}
                onPress={() =>
                  handleMarkerPress({
                    name: "Lisa Jackson",
                    plate: "XYZ9619",
                    phone: "545-216-1894",
                    rate: "Good",
                    photo: require("../images/deliveryperson1.png"),
                  })
                }
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
              <Marker
                description="Delivery Person 4"
                coordinate={{ latitude: 35.14165, longitude: 33.90581 }}
                onPress={() =>
                  handleMarkerPress({
                    name: "Ichiko K",
                    plate: "EAZ1412",
                    phone: "550-311-1912",
                    rate: "Good",
                    photo: require("../images/deliveryperson1.png"),
                  })
                }
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
            </>
          ) : null}

          {state == 2 ? (
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

        {state === 1 ? (
          <FAB
            style={mapStyle.fab}
            icon={{ name: "add", color: "white" }}
            color="#74D24F"
          />
        ) : null}

        {state === 2 ? (
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

        {state === 3 ? (
          <View style={mapStyle.flexCenter} testID="searchDeliveryCard">
            <ActivityIndicator color={mapStyle.icon.color} animating={true} />
            <Title style={mapStyle.title}>
              Searching For a Courier Close by.
            </Title>
            <Button mode="contained" style={mapStyle.cancelButton2}>
              Cancel
            </Button>
          </View>
        ) : null}

        {selectedMarker ? (
          <Card style={mapStyle.card}>
            <Card.Content style={mapStyle.cardContent}>
              <Image
                style={[mapStyle.markerImage, mapStyle.image]}
                source={selectedMarker.photo}
              />
              <List.Item
                title={`Name: ${selectedMarker.name}`}
                titleStyle={mapStyle.titleText}
              />
              <List.Item
                title={`Bike Plate: ${selectedMarker.plate}`}
                titleStyle={mapStyle.titleText}
              />
              <List.Item
                title={`Phone number: ${selectedMarker.phone}`}
                titleStyle={mapStyle.titleText}
              />
              <List.Item
                title={`Rate: ${selectedMarker.rate}`}
                titleStyle={[mapStyle.titleText, { color: "#C9C9C7" }]}
              />
            </Card.Content>
            <Card.Actions style={mapStyle.cardActions}>
              <Button mode="contained" style={mapStyle.confirmButton}>
                Confirm
              </Button>
              <Button
                mode="outlined"
                style={[mapStyle.cancelButton, { marginBottom: 7 }]}
                labelStyle={mapStyle.cancelButton}
                onPress={handleCancel}
              >
                Cancel
              </Button>
            </Card.Actions>
          </Card>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default VendorsMapScreen;
