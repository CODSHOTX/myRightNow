import "react-native-gesture-handler";
import React from "react";
import { useState, useEffect } from "react";
import { firebase } from "./firebaseConfig";
import { View, StatusBar } from "react-native";
import RootNavigator from "./src/navigation/rootNavigator";
import UserStack from "./src/navigation/userStack";
import { appStyle } from "./AppStyle";

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <View style={appStyle.container}>
        <StatusBar barStyle="light-content" backgroundColor="#74D24F" />
        <RootNavigator />
      </View>
    );
  }
  return (
    <View style={appStyle.container}>
      <StatusBar barStyle="light-content" backgroundColor="#74D24F" />
      <UserStack />
    </View>
  );
}
