let cacheName = 'exemplo';
let filesToCache = [
    './',
    './index.html',
    './styles.css'
];

self.addEventListener('install', (e) => {
    console.log('[ServiceWorker] Installer');
    e.waitUntil(
        caches.open(cacheName)
        .then((cache)=>{
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', (e) => {
    console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', (e) => {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.responseWith(
        caches.match(e.request)
        .then((r)=>{
            return r || fetch(e.request);
        })
    );
});

