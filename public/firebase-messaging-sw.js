// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
// messaging.onMessage((payload) => {
//     console.log('Message received. ', payload);
//     // ...
// });