import React, { useState, useEffect } from "react";
import { SafeAreaView, View, TextInput } from "react-native";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
import CourierHeader from "../components/CourierHeader";
import { firebase } from "../../firebaseConfig";
import { Button, Card, List, Title } from "react-native-paper";

const RequestScreen = ({ navigation }) => {
  const [requests, setRequests] = useState([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const requestRef = firebase
          .firestore()
          .collection("requests")
          .where("courierId", "==", firebase.auth().currentUser.uid);
        const snapshot = await requestRef.get();
        const requestsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequests(requestsData);
      } catch (error) {
        console.log("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (requestId) => {
    // Update the request in Firestore with the status and price
    try {
      const requestRef = firebase
        .firestore()
        .collection("requests")
        .doc(requestId);
      await requestRef.update({
        status: "Accepted",
        price: price,
      });
      setPrice(""); // Reset price
    } catch (error) {
      console.log("Error accepting request:", error);
    }
  };

  const handleReject = async (requestId) => {
    // Update the request in Firestore with the status
    try {
      const requestRef = firebase
        .firestore()
        .collection("requests")
        .doc(requestId);
      await requestRef.update({
        status: "Rejected",
      });
    } catch (error) {
      console.log("Error rejecting request:", error);
    }
  };

  return (
    <SafeAreaView style={driverconsoleStyle.container}>
      <CourierHeader navigation={navigation} />
      <View style={driverconsoleStyle.view2}>
        {requests.map((request, index) => (
          <Card key={index}>
            <Card.Content>
              <List.Item title={`Package ID: ${request.packageId}`} />
              <List.Item
                title={"Michael Jackson"}
                description="53 deliveries"
                left={() => (
                  <Avatar.Image
                    size={52}
                    source={{
                      uri: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3174456/profile-clipart-md.png",
                    }}
                  />
                )}
              />
              <List.Item
                title="Origin"
                description="Origin Street, 60"
                left={() => <List.Icon icon="flag-outline" />}
              />
              <List.Item
                title="Destination"
                description="Destination Street, 60"
                left={() => <List.Icon icon="flag-checkered" />}
              />
              <TextInput
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
              />
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => handleAccept(request.id)}>
                Accept
              </Button>
              <Button mode="outlined" onPress={() => handleReject(request.id)}>
                Reject
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default RequestScreen;
