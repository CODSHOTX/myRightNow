import {firebase} from '../../firebaseConfig';
export async function updateProfile(fiName, laName, phNum, country, city, street){
    const db = firebase.firestore();

  try {
    await db.collection('users').doc(firebase.auth().currentUser.uid).update({
      fiName,
      laName,
      phNum,
      country,
      city,
      street
    });

    alert('Data updated successfully');
  } catch (error) {
    console.error('Error updating Firestore data:', error);
  }
}