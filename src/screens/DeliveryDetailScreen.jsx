import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import { Card, List, Text } from "react-native-paper";
import { firebase } from "../../firebaseConfig";
import { deliveryinfoStyle } from "./screenStyles/DeliveryInfoStyle";

const DeliveryDetailScreen = ({ route, navigation }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const orderId = route.params.orderId;
  const price = route.params.price;

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
      <SafeAreaView style={deliveryinfoStyle.flex}>
        <Header title="RightNOW" type="arrow-left" navigation={navigation} />
        <Text style={deliveryinfoStyle.text}>No Info found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={deliveryinfoStyle.flex}>
      <Header title="RightNOW" type="arrow-left" navigation={navigation} />
      <View style={deliveryinfoStyle.viewflex}>
        <Card style={deliveryinfoStyle.card}>
          <Card.Title
            title={orderId} // Assuming the date field exists in your orders document
            titleStyle={deliveryinfoStyle.cardtitle}
            right={() => <Text style={deliveryinfoStyle.price}>₺{price}</Text>}
          ></Card.Title>
          <Card.Content>
            <List.Item
              title="Receiver Email"
              description={orderDetails.senderEmail}
              left={() => <List.Icon icon="email" />}
            />
            <List.Item
              title="Origin"
              description={orderDetails.origin}
              left={() => <List.Icon icon="flag-outline" />}
            />
            <List.Item
              title="Destination Address or Google Plus Code"
              description={orderDetails.dAdress}
              left={() => <List.Icon icon="flag-checkered" />}
            />
            <List.Item
              title="Receiver Name"
              description={orderDetails.receiverName}
              left={() => <List.Icon icon="account-arrow-left-outline" />}
            />
            <List.Item
              title="Receiver Email"
              description={orderDetails.rEmail}
              left={() => <List.Icon icon="email" />}
            />
            <List.Item
              title="Receiver Number"
              description={orderDetails.receiverNumber}
              left={() => <List.Icon icon="cellphone" />}
            />
            <List.Item
              title="Description"
              description={orderDetails.description}
              left={() => <List.Icon icon="information" />}
            />
            <List.Item
              title="Height"
              description={orderDetails.height}
              left={() => <List.Icon icon="tape-measure" />}
            />
            <List.Item
              title="Width"
              description={orderDetails.width}
              left={() => <List.Icon icon="tape-measure" />}
            />
            <List.Item
              title="Depth"
              description={orderDetails.depth}
              left={() => <List.Icon icon="tape-measure" />}
            />
            <List.Item
              title="Weight"
              description={orderDetails.weight}
              left={() => <List.Icon icon="weight" />}
            />
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryDetailScreen;
