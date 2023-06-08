import React, { useEffect, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, ScrollView, Alert } from "react-native";
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

  const handleCreateUser = () => {
    firebase.firestore().collection("users").add({
      fiName: fiName,
      emails: emails,
      role: role,
    }).then(() => {
      Alert.alert("User Created");
      setName("");
      setEmail("");
      setRole("");
      setSelectedUser(null);
    });
  };

  const handleUpdateUser = () => {
    if (selectedUser) {
      firebase.firestore().collection("users").doc(selectedUser.id).set({
        fiName: fiName,
        emails: emails,
        role: role,
      }).then(() => {
        Alert.alert("User Updated");
        setName("");
        setEmail("");
        setRole("");
        setSelectedUser(null);
      });
    }
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      firebase.firestore().collection("users").doc(selectedUser.id).delete().then(() => {
        Alert.alert("User Deleted");
        setName("");
        setEmail("");
        setRole("");
        setSelectedUser(null);
      });
    }
  };

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
        <Button mode="contained" style={adminStyle.button} onPress={handleCreateUser}>
          Create User
        </Button>
        <Button mode="elevated" labelStyle={adminStyle.upbutton} style={adminStyle.upbutton} onPress={handleUpdateUser}>
          Update User
        </Button>
        <Button mode="outlined" labelStyle={adminStyle.canbutton} style={adminStyle.canbutton} onPress={handleDeleteUser}>
          Delete User
        </Button>
        <View style={{ flex: 1, backgroundColor: "white" }}>
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
