import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import ItemHeader from "../components/ItemHeader";
import { FlatList } from "react-native-gesture-handler";
import { Card, Text, List } from "react-native-paper";
import { historyStyle } from "./screenStyles/HistoryStyle";
import { firebase } from "../../firebaseConfig";

export default function HistoryScreen({ navigation }) {
  const [orderDetails, setOrderDetails] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const user = firebase.auth().currentUser;
  const userEmail = user ? user.email : null;

  // Function to get the user tha is logged in email using Firebase Authentication
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

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const requestsRef = firebase.firestore().collection("requests");

    if (currentUserEmail !== "") {
      const unsubscribe = requestsRef
        .where("SenderEmail", "==", currentUserEmail)
        .onSnapshot(
          (snapshot) => {
            const requestsData = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setRequests(requestsData);
          },
          (error) => {
            console.log("Error fetching real-time updates:", error);
          }
        );

      
      return () => unsubscribe();
    }
  }, [currentUserEmail]);

  // to illustrate all the component
  return (
    <SafeAreaView style={historyStyle.safeview}>
      <ItemHeader
        title="Delivery History"
        type="arrow-left"
        navigation={navigation}
      />

      <View style={historyStyle.view}>
        <FlatList
          data={orderDetails}
          keyExtractor={(item) => `myorder${item.id}`}
          renderItem={({ item }) => (
            <Card style={{ ...historyStyle.card, ...historyStyle.cardstatus }}>
              <Card.Title
                titleStyle={historyStyle.cardtitle}
                title={item.courierEmail}
                right={() => (
                  <Text style={historyStyle.price}>₺{item.price}</Text>
                )}
              />
              <Card.Content style={historyStyle.cardcontent}>
                <List.Item
                  title={`Order ID: ${item.orderId}`}
                  description={`Status: ${item.pStatus}`}
                />
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
