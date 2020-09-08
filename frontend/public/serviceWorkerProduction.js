let cacheData = 'appProduction';
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/index.html',
        '/signin',
        '/signup',
        '/playerrank',
        '/',
        '/manifest.json',
        '/favicon.ico',
        '/logo144.png',
        '/logo192.png',
        '/logo512.png',
        '/static/js/2.a99b1d1c.chunk.js',
        '/static/js/main.067602cc.chunk.js',
        '/static/js/main.c3847dca.chunk.js',
        '/static/js/main.5f1293a9.chunk.js',
        '/static/css/main.55b056bd.chunk.css',
        '/static/js/runtime-main.c8a21426.js',
        '/static/media/brick6.32f94ee9.jpg',
        '/static/media/brick4.be428367.jpg',
        '/static/media/background3.c27a9155.png',
        '/static/media/background6.a28ea63b.gif',
        '/static/media/background1.dfcff9fc.png',
        '/static/media/background7.a5002b81.jpg',
        '/static/media/level1.59165818.gif',
        '/static/media/level3.705036d1.gif',
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
      })
    );
  }
});
