import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { firestorePlugin  } from 'vuefire';
// import firebase from "firebase/app";
// import firebaseMessaging from './firebase';
// import 'firebase/firebase-messaging';

// import push from './push';
import VueAlertify from 'vue-alertify';

Vue.use(firestorePlugin);
Vue.use(VueAlertify);

// Vue.prototype.$messaging = firebaseMessaging;

// firebaseMessaging.getToken({vapidKey: process.env.VUE_APP_FIREBASE_KEY})
// .then(ct => {
//   console.log(ct);
// })
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
