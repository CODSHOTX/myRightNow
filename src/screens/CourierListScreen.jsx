import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, SafeAreaView } from "react-native";
import { Card, Button, ActivityIndicator, List } from "react-native-paper";
import { firebase } from "../../firebaseConfig";
import { mapStyle } from "./screenStyles/MapStyle";
import ItemHeader from "../components/ItemHeader";

const CourierListScreen = ({ navigation }) => {
  const [couriers, setCouriers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCouriersData = async () => {
      //getting courier data form user but using the role to corfim type of user
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courier data:", error);
      }
    };
    fetchCouriersData();
  }, []);

  if (loading) {
    return <ActivityIndicator color={mapStyle.icon.color} animating={true} />;
  }

  return (
    <SafeAreaView style={mapStyle.safeview}>
      <ItemHeader
        title="Courier List"
        z
        type="arrow-left"
        navigation={navigation}
      />
      <View style={mapStyle.view}>
        <ScrollView>
          {couriers.map((courier, index) => (
            <Card key={index} style={mapStyle.card}>
              <Card.Content style={mapStyle.cardContent}>
                <Image
                  style={[mapStyle.markerImage, mapStyle.image]}
                  source={courier.profileImage}
                />
                <List.Item
                  title={`Name: ${courier.fiName} ${courier.laName}`}
                  titleStyle={mapStyle.titleText}
                />
                <List.Item
                  title={`Phone number: ${courier.phNum}`}
                  titleStyle={mapStyle.titleText}
                />
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CourierListScreen;
