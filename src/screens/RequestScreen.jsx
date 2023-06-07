import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { Button, TouchableRipple } from "react-native-paper";
import { firebase } from "../../firebaseConfig";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
import CourierHeader from "../components/CourierHeader";
import { requestStyle } from "./screenStyles/RequestStyle";

const PriceInput = ({ requestId }) => {
  const [priceInput, setPriceInput] = useState(null);

  const handlePriceSubmit = async () => {
    try {
      await firebase.firestore().collection("requests").doc(requestId).update({
        price: priceInput,
      });
      setPriceInput(null);
    } catch (error) {
      console.log("Error updating price:", error);
    }
  };

  return (
    <View style={requestStyle.view1}>
      <TextInput
        style={requestStyle.inputText}
        placeholder="Enter price"
        selectionColor="#74D24F"
        onChangeText={setPriceInput}
        value={priceInput}
      />
      <Button
        style={requestStyle.submitButton}
        mode="contained"
        onPress={handlePriceSubmit}
      >
        Submit
      </Button>
    </View>
  );
};

const StatusButtons = ({ requestId }) => {
  const handleStatusUpdate = async (newStatus) => {
    try {
      await firebase.firestore().collection("requests").doc(requestId).update({
        pStatus: newStatus,
      });
    } catch (error) {
      console.log("Error updating status:", error);
    }
  };

  return (
    <View style={requestStyle.view2}>
      <Paragraph style={requestStyle.textmargin}>Status: </Paragraph>
      <Button
        mode="contained"
        style={requestStyle.acceptButton}
        onPress={() => handleStatusUpdate("Accepted")}
      >
        Accepted
      </Button>
      <Button
        mode="outlined"
        style={requestStyle.rejectButton}
        labelStyle={requestStyle.rejectButton}
        onPress={() => handleStatusUpdate("Rejected")}
      >
        Rejected
      </Button>
    </View>
  );
};

const RequestScreen = ({ navigation }) => {
  const [requests, setRequests] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  useEffect(() => {
    // Fetching the current user's email
    const user = firebase.auth().currentUser;
    if (user !== null) {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setCurrentUserEmail(doc.data().emails);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  }, []);

  useEffect(() => {
    const requestsRef = firebase.firestore().collection("requests");

    if (currentUserEmail !== "") {
      const unsubscribe = requestsRef
        .where("courierEmail", "==", currentUserEmail)
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

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, [currentUserEmail]);

  return (
    <SafeAreaView style={requestStyle.container}>
      <CourierHeader navigation={navigation} />
      <View style={requestStyle.view}>
        <ScrollView>
          {requests.map((request, index) => (
            <TouchableRipple
              key={request.id} // Add key here
              onPress={() =>
                navigation.navigate("RequestDetailScreen", {
                  orderId: request.orderId,
                })
              }
            >
              <Card style={requestStyle.card}>
                <Card.Content>
                  <Title style={requestStyle.textmargin}>
                    Courier Email: {request.courierEmail}
                  </Title>
                  <Paragraph style={requestStyle.textmargin}>
                    Order ID: {request.orderId}
                  </Paragraph>
                  {request.price ? (
                    <Paragraph style={requestStyle.textmargin}>
                      Price: {request.price}
                    </Paragraph>
                  ) : (
                    <PriceInput requestId={request.id} />
                  )}
                  {request.pStatus ? (
                    <Paragraph style={requestStyle.textmargin}>
                      Status: {request.pStatus}
                    </Paragraph>
                  ) : (
                    <StatusButtons requestId={request.id} />
                  )}
                </Card.Content>
              </Card>
            </TouchableRipple>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RequestScreen;
