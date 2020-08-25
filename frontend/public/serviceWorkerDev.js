let cacheData = 'appDevelopment';
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        '/static/js/1.chunk.js',
        '/main.b59f20f477360a4053af.hot-update.js',
        '/main.d3acf596eb3f232d891c.hot-update.js',
        '/index.html',
        '/signin',
        '/signup',
        '/playerrank',
        '/',
        '/logo192.png',
        '/favicon.ico',
        '/manifest.json',
        '/main.c8f10c257337a58bd900.hot-update.js',
        '/static/media/brick6.32f94ee9.jpg',
        '/static/media/brick4.be428367.jpg',
        '/static/media/background3.c27a9155.png',
        '/static/media/background6.a28ea63b.gif',
        '/static/media/background1.dfcff9fc.png',
        '/static/media/background7.a5002b81.jpg',
        '/static/media/background4.a901a15b.png',
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
