import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card, List, IconButton } from "react-native-paper";
import HomeHeader from "../components/HomeHeader";
import { myorderStyle } from "./screenStyles/MyOrderStyle";
import { mapStyle } from "./screenStyles/MapStyle";
import { firebase } from "../../firebaseConfig";

export default function OrderHistoryScreen({ navigation }) {
  const [orderDetails, setOrderDetails] = useState([]);

 
  useEffect(() => {
    const user = firebase.auth().currentUser;
    const userEmail = user ? user.email : null;

    if (userEmail) {
      const ordersRef = firebase.firestore().collection("requests");
      const unsubscribe = ordersRef
        .where("senderEmail", "==", userEmail)
        .onSnapshot(
          (snapshot) => {
            const ordersData = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setOrderDetails(ordersData);
          },
          (error) => {
            console.log("Error fetching real-time updates:", error);
          }
        );

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, []);

  return (
    <SafeAreaView style={myorderStyle.safeview}>
      <HomeHeader navigation={navigation} />
      <View style={myorderStyle.view}>
        <FlatList
          data={orderDetails}
          keyExtractor={(item) => `myorder${item.id}`}
          renderItem={({ item }) => (
            <Card style={mapStyle.card}>
              <Card.Content>
                <List.Item
                  title={`Email: ${item.courierEmail}`}
                  description={`Order ID: ${item.orderId}`}
                />
                <List.Item
                  title={`₺${item.price}`}
                  description={`Status: ${item.pStatus}`}
                  left={() => (
                    <IconButton
                      icon="bike-fast"
                      size={32}
                      style={mapStyle.icon}
                      iconColor={mapStyle.icon.color}
                    />
                  )}
                />
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
