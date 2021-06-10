import firebase from "firebase/app";
import 'firebase/firebase-messaging';
import 'firebase/firebase-analytics';
// import { register } from 'register-service-worker';

let firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_KEY,
    authDomain: "vue-pwa-3609e.firebaseapp.com",
    projectId: "vue-pwa-3609e",
    storageBucket: "vue-pwa-3609e.appspot.com",
    messagingSenderId: "940797911610",
    appId: "1:940797911610:web:8ad2f832d9dc2c978b0b03",
    measurementId: "G-N07N1PHBVP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase.messaging()