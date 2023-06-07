import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, Image } from "react-native";
import { firebase } from "../../firebaseConfig";
import ItemHeader from "../components/ItemHeader";

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
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <ItemHeader
          title="Request Detail"
          type="arrow-left"
          navigation={navigation}
        />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ItemHeader
        title="Request Detail"
        type="arrow-left"
        navigation={navigation}
      />
      <Text>Order ID: {orderId}</Text>
      <Text>Description: {orderDetails.description}</Text>
      <Text>Height: {orderDetails.height}</Text>
      <Text>Width: {orderDetails.width}</Text>
      <Text>Depth: {orderDetails.depth}</Text>
      <Text>Weight: {orderDetails.weight}</Text>
      <Text>Delivery Latitude: {orderDetails.dLatitude}</Text>
      <Text>Delivery Longitude: {orderDetails.dLongitude}</Text>
      <Text>Receiver Email: {orderDetails.rEmail}</Text>
      <Text>Receiver Name: {orderDetails.receiverName}</Text>
      <Text>Receiver Number: {orderDetails.receiverNumber}</Text>
      <Text>Sender Email: {orderDetails.senderEmail}</Text>
      {orderDetails.image && orderDetails.image.uri && (
        <Image source={{ uri: orderDetails.image.uri }} style={{ width: 200, height: 200 }} />
      )}
    </SafeAreaView>
  );
};

export default RequestDetailScreen;
