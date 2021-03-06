workbox.core.setCacheNameDetails({prefix: "vue_pwa"});

self.addEventListener('message', (event) => {
  console.log(event);
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
* The workboxSW.precacheAndRoute() method efficiently caches and responds to
* requests for URLs in the manifest.
* See https://goo.gl/S9QRab
*/
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
 