import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View, Text } from "react-native";
import { TouchableOpacity, TextInput, ScrollView } from "react-native";
import { firebase } from "../../firebaseConfig";

export default function AdminScreen() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((querySnapshot) => {
        const users = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setUsers(users);
      });
  }, []);

  const handleCreateUser = () => {
    firebase.firestore().collection("users").add({
      name: name,
      email: email,
    });
  };

  const handleUpdateUser = () => {
    if (selectedUser) {
      firebase.firestore().collection("users").doc(selectedUser.id).set({
        name: name,
        email: email,
      });
    }
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      firebase.firestore().collection("users").doc(selectedUser.id).delete();
    }
  };

  const selectUser = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#F5F5F5"
      />
      <View>
        <Text>Admin Screen</Text>
        <TextInput
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TouchableOpacity onPress={handleCreateUser}>
          <Text>Create User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUpdateUser}>
          <Text>Update User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteUser}>
          <Text>Delete User</Text>
        </TouchableOpacity>
        <ScrollView>
          {users.map((user) => (
            <TouchableOpacity key={user.id} onPress={() => selectUser(user)}>
              <Text>{user.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}