// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3k2Vvzoj8-gXoLmt3tsYo0f8RmOXn3Sk',
  authDomain: 'react-native-firebase-eba1a.firebaseapp.com',
  projectId: 'react-native-firebase-eba1a',
  storageBucket: 'react-native-firebase-eba1a.appspot.com',
  messagingSenderId: '668397130812',
  appId: '1:668397130812:web:6f543fede2c072d0a2df39',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firebase();

export default {firebase, db};
