const CACHE = 'rc-racing-v1';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Exo+2:wght@400;600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
