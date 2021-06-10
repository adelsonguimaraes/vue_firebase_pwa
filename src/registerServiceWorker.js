/* eslint-disable no-console */

import { register } from 'register-service-worker'
// import VueAlertify from 'vue-alertify'

register('firebase-messaging-sw.js');

// const notifyUserAboutUpdate = 
// worker => {
//   // VueAlertify.$alertify.confirm("Novo conteúdo!", () =>{
//   //   worker.postMessage({action: 'SKIP_WAITING'});
//   // });
//   let ok = confirm('Novo conteúdo, deseja atualizar ?');
//   if (ok) {
//     worker.postMessage({type: 'SKIP_WAITING'});
//   }
// };

// if (process.env.NODE_ENV === 'production') {
//   register(`${process.env.BASE_URL}service-worker.js`, {
//   // register(`${process.env.BASE_URL}firebase-messaging-sw.js`, {
//     ready () {
//       console.log(
//         'App is being served from cache by a service worker.\n' +
//         'For more details, visit https://goo.gl/AFskqB'
//       )
//     },
//     registered () {
//       console.log('Service worker has been registered.')
//     },
//     cached () {
//       console.log('Content has been cached for offline use.')
//     },
//     updatefound () {
//       console.log('New content is downloading.')
//     },
//     updated (reg) {
//       console.log('Novo conteúdo disponível; Por favor atualize a página. ');
//       notifyUserAboutUpdate(reg.waiting);
//     },
//     offline () {
//       console.log('No internet connection found. App is running in offline mode.')
//     },
//     error (error) {
//       console.error('Error during service worker registration:', error)
//     }
//   })

//   var refreshing;
//   navigator.serviceWorker.addEventListener("controllerchange", function () {
//     if (refreshing) return;
//     window.location.reload();
//     refreshing = true;
//   });
// }