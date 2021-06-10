importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

let firebaseConfig = {
    apiKey: "AIzaSyDRyNMPT95BY1qKCaY4A10odQ-Ym5HRPrg",
    authDomain: "vue-pwa-3609e.firebaseapp.com",
    projectId: "vue-pwa-3609e",
    storageBucket: "vue-pwa-3609e.appspot.com",
    messagingSenderId: "940797911610",
    appId: "1:940797911610:web:8ad2f832d9dc2c978b0b03",
    measurementId: "G-N07N1PHBVP"
};

const app = firebase.initializeApp(firebaseConfig)

app.messaging().getToken({vapidKey: "AIzaSyDRyNMPT95BY1qKCaY4A10odQ-Ym5HRPrg"})
.then(ct => {
  console.log(ct);
})

// primeiro plano
// app.messaging().onMessage((payload) => {
//     console.log('Message received. ', payload);
//     // ...
// });

// segundo plano
app.messaging().onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });