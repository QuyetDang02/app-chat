import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyDz521jjuvz4jx1MRDOtniO4Z8p5cy0iLE",
  authDomain: "chat-app-7ab52.firebaseapp.com",
  projectId: "chat-app-7ab52",
  storageBucket: "chat-app-7ab52.appspot.com",
  messagingSenderId: "74369312618",
  appId: "1:74369312618:web:44823bbfbe9845dbde2713",
  measurementId: "G-BNWR1XR3G1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
