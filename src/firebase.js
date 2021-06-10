import firebase from "firebase/app";
import 'firebase/firebase-messaging';
import 'firebase/firebase-analytics';
import { register } from 'register-service-worker';

const reg = register('firebase-messaging-sw.js');

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
  const app = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

// export default function () {
    const messaging = app.messaging();
    messaging.useServiceWorker(reg);
    messaging.getToken({
        vapidKey: process.env.VUE_APP_FIREBASE_KEY,
        // serviceWorkerRegistration: reg
    })
    .then(ct => {
        console.log('CToken: ', ct);
        return ct;
    })
    .catch(err => {
        console.warn('CToken não disponível', err);
    });
        
// }


// import firebase from "firebase/app";
// import 'firebase/firebase-messaging';
// import 'firebase/firebase-analytics';

// let firebaseConfig = {
//     apiKey: "AIzaSyDRyNMPT95BY1qKCaY4A10odQ-Ym5HRPrg",
//     authDomain: "vue-pwa-3609e.firebaseapp.com",
//     projectId: "vue-pwa-3609e",
//     storageBucket: "vue-pwa-3609e.appspot.com",
//     messagingSenderId: "940797911610",
//     appId: "1:940797911610:web:8ad2f832d9dc2c978b0b03",
//     measurementId: "G-N07N1PHBVP"
//   };
  
//   // Initialize Firebase
//   // const app = 
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  
//   export default firebase.messaging()