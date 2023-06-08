import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, Image, ScrollView, View } from "react-native";
import { firebase } from "../../firebaseConfig";
import ItemHeader from "../components/ItemHeader";
import { Card, List } from "react-native-paper";
import { requestDetailsStyle } from "./screenStyles/RequestDetailsStyle";

const RequestDetailScreen = ({ route, navigation }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const { orderId } = route.params;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orderRef = firebase.firestore().collection("orders");
        const snapshot = await orderRef.where("orderId", "==", orderId).get();

        if (!snapshot.empty) {
          // Assuming there's only one matching document
          const doc = snapshot.docs[0];
          setOrderDetails(doc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!orderDetails) {
    return (
      <SafeAreaView style={requestDetailsStyle.safeview}>
        <ItemHeader
          title="Request Detail"
          type="arrow-left"
          navigation={navigation}
        />
        <Text style={requestDetailsStyle.text}>No Info found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={requestDetailsStyle.safeview}>
      <ItemHeader
        title="Request Detail"
        type="arrow-left"
        navigation={navigation}
      />
      <View style={requestDetailsStyle.view}>
        <ScrollView>
          <Card style={requestDetailsStyle.card}>
            <Card.Content>
              <List.Item
                title={`Order ID: ${orderId}`}
                titleStyle={requestDetailsStyle.listItem}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Description: ${orderDetails.description}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Height: ${orderDetails.height}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Width: ${orderDetails.width}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Depth: ${orderDetails.depth}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Weight: ${orderDetails.weight}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Delivery Origin: ${orderDetails.origin}`}
                description={`${orderDetails.origin}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Delivery Destination: ${orderDetails.dAdress}`}
                description={`${orderDetails.dAdress}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Receiver Email: ${orderDetails.rEmail}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Receiver Name: ${orderDetails.receiverName}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Receiver Number: ${orderDetails.receiverNumber}`}
              />
              <List.Item
                titleStyle={requestDetailsStyle.listItem}
                title={`Sender Email: ${orderDetails.senderEmail}`}
              />
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RequestDetailScreen;
