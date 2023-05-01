import 'react-native-gesture-handler';
import React from "react";
import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore, setDoc, doc} from 'firebase/firestore';
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {colors} from "./src/global/styles";
import RootNavigator from "./src/navigation/rootNavigator";
import { Button } from '@rneui/base';

export default function App(){
  const firebaseConfig = {
    apiKey: "AIzaSyD7Z01JFclO_4k3QXRK05HdkHRnypOu77U",
    authDomain: "rightnow-e7d0e.firebaseapp.com",
    projectId: "rightnow-e7d0e",
    storageBucket: "rightnow-e7d0e.appspot.com",
    messagingSenderId: "86422342206",
    appId: "1:86422342206:web:299621b048f6976c059f6f",
    measurementId: "G-W90MJTP177"
  };

  const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase


const sendDataToFirebase = async ()=>{
  const firestore = getFirestore();
  await setDoc(doc(firestore, "users", "user_id"),{
    employment:"+23481478987",
    name:"king tap",
    age:127
  
  });
}

  return(
    <View style = {styles.container}>
      <Button title='Send Data' onPress={sendDataToFirebase}></Button>
     <StatusBar
     barStyle = "light-content"
     backgroundColor={colors.statusbar}
     />

   {//<RootNavigator/>
   } 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})