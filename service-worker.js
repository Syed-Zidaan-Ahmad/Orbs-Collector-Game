// Service Worker for Orbs Collector Game
const CACHE_NAME = 'orbscollector-cache-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './Orbs-Collector-192.png',
    './Orbs-Collector-512.png'
];
// Install Event: Caching files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching all game assets...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});
// Activate Event Clearing old caches if any
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Clearing old cache...', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
// Fetch Event: Serving from cache when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch(() => {
            // Offline fallback
            return caches.match('./index.html');
        })
    );
});
// End of Program