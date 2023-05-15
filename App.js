import 'react-native-gesture-handler';
import React from "react";
import { useState, useEffect } from 'react';
import {firebase} from './firebaseConfig'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {colors} from "./src/global/styles";
import RootNavigator from "./src/navigation/rootNavigator";


export default function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber;
  }, []);
    if (!user){
      return(
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.statusbar}
          />
       <RootNavigator/> 
        </View>
      )
    }
  
}

const styles = StyleSheet.create({
  container: { flex: 1, 
  backgroundColor: "#116530"}
})