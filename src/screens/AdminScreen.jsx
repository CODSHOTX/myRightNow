import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { TextInput, Button, Card, List } from "react-native-paper";
import { firebase } from "../../firebaseConfig";
import HomeHeader from "../components/HomeHeader";
import { adminStyle } from "./screenStyles/AdminStyle";

export default function AdminScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [fiName, setName] = useState("");
  const [emails, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .onSnapshot((querySnapshot) => {
        const users = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setUsers(users);
      });

    return () => unsubscribe();
  }, []);

  const handleCreateUser = async () => {
    // Firebase Authentication for the user that has been created
    let authUser;
    try {
      authUser = await firebase.auth().createUserWithEmailAndPassword(emails, Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7));
    } catch (error) {
      Alert.alert("Error", "Failed to create user: " + error.message);
      return;
    }

    // creation of user directy link to Firestore
    firebase
      .firestore()
      .collection("users")
      .add({
        fiName: fiName,
        emails: emails,
        role: role,
      })
      .then(() => {
        Alert.alert("User Info Created");
        setName("");
        setEmail("");
        setRole("");
        setSelectedUser(null);

        // mail Send to new user to input new password
        firebase.auth().sendPasswordResetEmail(emails)
          .then(() => {
            Alert.alert("Email Sent", "Password reset email has been sent to " + emails);
          })
          .catch((error) => {
            Alert.alert("Error", "Failed to send password reset email: " + error.message);
          });
      });
  };

  //directly update the user seleted
  const handleUpdateUser = () => {
    if (selectedUser) {
      firebase
        .firestore()
        .collection("users")
        .doc(selectedUser.id)
        .set({
          fiName: fiName,
          emails: emails,
          role: role,
        })
        .then(() => {
          Alert.alert("User Info Updated");
          setName("");
          setEmail("");
          setRole("");
          setSelectedUser(null);
        });
    }
  };

  //deletes the user in the app directly from firestore
  const handleDeleteUser = () => {
    if (selectedUser) {
      firebase
        .firestore()
        .collection("users")
        .doc(selectedUser.id)
        .delete()
        .then(() => {
          Alert.alert("User Info Deleted");
          setName("");
          setEmail("");
          setRole("");
          setSelectedUser(null);
        });
    }
  };

  // selects the users card
  const selectUser = (user) => {
    setSelectedUser(user);
    setName(user.fiName);
    setEmail(user.emails);
    setRole(user.role);
  };

  return (
    <SafeAreaView style={adminStyle.safeview}>
      <HomeHeader navigation={navigation} />
      <View style={adminStyle.container}>
        <TextInput
          label="Name"
          style={adminStyle.textinput}
          activeUnderlineColor="#74D24F"
          onChangeText={(text) => setName(text)}
          value={fiName}
        />
        <TextInput
          label="Email"
          style={adminStyle.textinput}
          keyboardType="email-address"
          activeUnderlineColor="#74D24F"
          onChangeText={(text) => setEmail(text)}
          value={emails}
        />
        <TextInput
          label="Role"
          style={adminStyle.textinput}
          activeUnderlineColor="#74D24F"
          onChangeText={(text) => setRole(text)}
          value={role}
        />
        <Button
          mode="contained"
          style={adminStyle.button}
          onPress={handleCreateUser}
        >
          Create User
        </Button>
        <Button
          mode="elevated"
          labelStyle={adminStyle.upbutton}
          style={adminStyle.upbutton}
          onPress={handleUpdateUser}
        >
          Update User
        </Button>
        <Button
          mode="outlined"
          labelStyle={adminStyle.canbutton}
          style={adminStyle.canbutton}
          onPress={handleDeleteUser}
        >
          Delete User
        </Button>
        <View style={adminStyle.view}>
          <ScrollView>
            {users.map((user) => (
              <TouchableOpacity key={user.id} onPress={() => selectUser(user)}>
                <Card style={adminStyle.card}>
                  <Card.Content>
                    <List.Item
                      title="User Email"
                      description={user.emails}
                      left={() => <List.Icon icon="email" />}
                    />
                    <List.Item
                      title="Name"
                      description={user.fiName + " " + user.laName}
                      left={() => <List.Icon icon="account-details" />}
                    />
                    <List.Item
                      title="Role"
                      description={user.role}
                      left={() => <List.Icon icon="account-convert" />}
                    />
                    <List.Item
                      title="Phone Number"
                      description={user.phNum}
                      left={() => <List.Icon icon="phone" />}
                    />
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}