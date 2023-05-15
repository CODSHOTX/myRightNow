import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD7Z01JFclO_4k3QXRK05HdkHRnypOu77U",
    authDomain: "rightnow-e7d0e.firebaseapp.com",
    projectId: "rightnow-e7d0e",
    storageBucket: "rightnow-e7d0e.appspot.com",
    messagingSenderId: "86422342206",
    appId: "1:86422342206:web:299621b048f6976c059f6f",
    measurementId: "G-W90MJTP177"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }
   // const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase




export {firebase}; 