import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  Card,
  Text,
  List,
  Button,
  IconButton,
  Avatar,
} from "react-native-paper";
import HomeHeader from "../components/HomeHeader";
import { myorderStyle } from "./screenStyles/MyOrderStyle";
import { mapStyle } from "./screenStyles/MapStyle";
import { firebase } from "../../firebaseConfig";

export default function OrderHistoryScreen({ navigation }) {
  const [packages, setPackage] = useState(true);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const ordersRef = firebase.firestore().collection("requests");
    const unsubscribe = ordersRef.onSnapshot(
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
