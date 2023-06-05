import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity, TextInput, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { firebase } from "../../firebaseConfig";
import HomeHeader from "../components/HomeHeader";
import { adminStyle } from "./screenStyles/AdminStyle";

export default function AdminScreen({ navigation }) {
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
    <SafeAreaView style={adminStyle.safeview}>
      <HomeHeader navigation={navigation} />
      <View style={adminStyle.container}>
        <TextInput
          label="Name"
          style={adminStyle.textinput}
          activeUnderlineColor="#74D24F"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          label="Email"
          style={adminStyle.textinput}
          activeUnderlineColor="#74D24F"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TouchableOpacity
          style={adminStyle.imgbutton}
          onPress={handleCreateUser}
        >
          <Text>Create User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={adminStyle.imgbutton}
          onPress={handleUpdateUser}
        >
          <Text>Update User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={adminStyle.imgbutton}
          onPress={handleDeleteUser}
        >
          <Text>Delete User</Text>
        </TouchableOpacity>
        <ScrollView>
          {users.map((user) => (
            <TouchableOpacity
              style={adminStyle.imgbutton}
              key={user.id}
              onPress={() => selectUser(user)}
            >
              <Text>{user.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
