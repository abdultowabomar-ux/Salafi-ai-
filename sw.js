const CACHE_NAME = 'salafi-ai-v1';
const urlsToCache = [
  './',
  './index.html' // أضف هنا أي ملفات ثابتة أخرى
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

