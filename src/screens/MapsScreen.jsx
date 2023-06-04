import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "./screenStyles/MapStyle";
import { firebase } from "../../firebaseConfig";
import ItemHeader from "../components/ItemHeader";
import { FAB } from "@rneui/base";
import { Button, Card, List } from "react-native-paper";
import { ActivityIndicator, Title } from "react-native-paper";

const MapsScreen = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [couriers, setCouriers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clientLocation, setClientLocation] = useState(null);

  useEffect(() => {
    const fetchCouriersData = async () => {
      try {
        const courierDocRef = firebase
          .firestore()
          .collection("users")
          .where("role", "==", "courier");
        const snapshot = await courierDocRef.get();
        const couriers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCouriers(couriers);
        console.log("Fetched couriers:", couriers);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching courier data:", error);
      }
    };

    const fetchClientLocation = async () => {
      try {
        const clientDocRef = firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid);
        const doc = await clientDocRef.get();
        if (doc.exists) {
          const clientData = doc.data();
          const { latitude, longitude } = clientData;
          if (latitude && longitude) {
            setClientLocation({ latitude, longitude });
          }
        }
      } catch (error) {
        console.log("Error fetching client location:", error);
      }
    };

    fetchCouriersData();
    fetchClientLocation();
  }, []);

  const handleMarkerPress = (markerData) => {
    console.log("Marker data:", markerData);
    setSelectedMarker(markerData);
  };

  const handleCancel = () => {
    setSelectedMarker(null);
  };

  const handleConfirm = async () => {
    try {
      const requestRef = firebase.firestore().collection("requests");
      await requestRef.add({
        courierId: selectedMarker.id,
      });
      setSelectedMarker(null);
    } catch (error) {
      console.log("Error confirming courier:", error);
    }
  };

  if (loading) {
    return (
      <View style={mapStyle.flexCenter}>
        <ActivityIndicator color={mapStyle.icon.color} animating={true} />
        <Title style={mapStyle.title}>Searching For a Courier Close by.</Title>
        <Button mode="contained" style={mapStyle.cancelButton2}>
          Cancel
        </Button>
      </View>
    );
  }

  return (
    <SafeAreaView style={mapStyle.safeview}>
      <ItemHeader title="RightNOW" type="arrow-left" navigation={navigation} />
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
          {clientLocation && (
            <Marker
              description="Client location"
              coordinate={clientLocation}
            >
              <Image
                style={mapStyle.markerImage}
                source={require("../images/origin.png")}
              />
            </Marker>
          )}

          {couriers.map((courier, index) =>
            courier.latitude && courier.longitude ? (
              <Marker
                key={index}
                description={courier.fiName}
                coordinate={{
                  latitude: courier.latitude,
                  longitude: courier.longitude,
                }}
                onPress={() =>
                  handleMarkerPress({
                    name: `${courier.fiName} ${courier.laName}`,
                    plate: "XFH-1283",
                    phone: courier.phNum,
                    rate: "Good",
                    photo: courier.profileImage,
                  })
                }
              >
                <Image
                  style={mapStyle.markerImage}
                  source={require("../images/deliverybike_icon.png")}
                />
              </Marker>
            ) : null
          )}
        </MapView>

        {!selectedMarker ? (
          <FAB
            style={mapStyle.fab}
            icon={{ name: "add", color: "white" }}
            color="#74D24F"
          />
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
              <Button
                mode="contained"
                style={mapStyle.confirmButton}
                onPress={handleConfirm}
              >
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

export default MapsScreen;
