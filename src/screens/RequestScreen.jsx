// import React, { useState, useEffect } from "react";
// import { SafeAreaView, View, TextInput } from "react-native";
// import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
// import CourierHeader from "../components/CourierHeader";
// import { firebase } from "../../firebaseConfig";
// import { Button, Card, List } from "react-native-paper";

// const RequestScreen = ({ navigation }) => {
//   const [requests, setRequests] = useState([]);
//   const [price, setPrice] = useState("");

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const currentUserEmail = firebase.auth().currentUser.email;
//         const requestRef = firebase
//           .firestore()
//           .collection("requests")
//           .where("courierEmail", "==", currentUserEmail);
//         const snapshot = await requestRef.get();
//         const requestsData = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setRequests(requestsData);
//       } catch (error) {
//         console.log("Error fetching requests:", error);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleAccept = async (requestId) => {
//     // Update the request in Firestore with the status and price
//     try {
//       const requestRef = firebase
//         .firestore()
//         .collection("requests")
//         .doc(requestId);
//       await requestRef.update({
//         pStatus: "Accepted",
//         price: price,
//       });
//       setPrice(""); // Reset price
//     } catch (error) {
//       console.log("Error accepting request:", error);
//     }
//   };

//   const handleReject = async (requestId) => {
//     // Update the request in Firestore with the status
//     try {
//       const requestRef = firebase
//         .firestore()
//         .collection("requests")
//         .doc(requestId);
//       await requestRef.update({
//         pStatus: "Rejected",
//       });
//     } catch (error) {
//       console.log("Error rejecting request:", error);
//     }
//   };

//   return (
//     <SafeAreaView style={driverconsoleStyle.container}>
//       <CourierHeader navigation={navigation} />
//       <View style={driverconsoleStyle.view2}>
//         {requests.map((request) => (
//           <Card key={request.id}>
//             <Card.Content>
//               <List.Item title={`Package ID: ${request.orderId}`} />
//               <List.Item
//                 title={"Michael Jackson"}
//                 description="53 deliveries"
//                 // left={() => (
//                 //   <Avatar.Image
//                 //     size={52}
//                 //     source={{
//                 //       uri: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3174456/profile-clipart-md.png",
//                 //     }}
//                 //   />
//                 // )}
//               />
//               <List.Item
//                 title="Origin"
//                 description="Origin Street, 60"
//                 left={() => <List.Icon icon="flag-outline" />}
//               />
//               <List.Item
//                 title="Destination"
//                 description="Destination Street, 60"
//                 left={() => <List.Icon icon="flag-checkered" />}
//               />
//               <TextInput
//                 placeholder="Price"
//                 value={price}
//                 onChangeText={setPrice}
//               />
//             </Card.Content>
//             <Card.Actions>
//               <Button
//                 mode="contained"
//                 onPress={() => handleAccept(request.id)}
//               >
//                 Accept
//               </Button>
//               <Button
//                 mode="outlined"
//                 onPress={() => handleReject(request.id)}
//               >
//                 Reject
//               </Button>
//             </Card.Actions>
//           </Card>
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default RequestScreen;

import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { firebase } from "../../firebaseConfig";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
import CourierHeader from "../components/CourierHeader";

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
    <View>
      <TextInput
        placeholder="Enter price"
        onChangeText={setPriceInput}
        value={priceInput}
      />
      <Button mode="contained" onPress={handlePriceSubmit}>
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
    <View>
      <Button mode="contained" onPress={() => handleStatusUpdate("Accepted")}>
        Accepted{" "}
      </Button>
      <Button mode="contained" onPress={() => handleStatusUpdate("Reject")}>
        Rejected{" "}
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
    <SafeAreaView style={driverconsoleStyle.container}>
      <CourierHeader navigation={navigation} />
      <View style={driverconsoleStyle.view2}>
        <ScrollView>
          {requests.map((request, index) => (
            <Card key={index} style={{ margin: 10 }}>
              <Card.Content>
                <Title>Courier Email: {request.courierEmail}</Title>
                <Paragraph>Order ID: {request.orderId}</Paragraph>
                {request.price ? (
                  <Paragraph>Price: {request.price}</Paragraph>
                ) : (
                  <PriceInput requestId={request.id} />
                )}
                {request.pStatus ? (
                  <Paragraph>Status: {request.pStatus}</Paragraph>
                ) : (
                  <StatusButtons requestId={request.id} />
                )}
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RequestScreen;
