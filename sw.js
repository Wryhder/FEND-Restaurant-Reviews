console.log('Service Worker: Registered');

const pageCache = 'cacheV1';
const urlsToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(pageCache)
          .then(function(cache) {
              console.log('Opened cache');
              return cache.addAll(urlsToCache);
          })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
          .then(function(response) {
              if (response) {
                  console.log('Found', event.request, ' in cache');
                  return response;
              } else {
                  console.log('Could not find', event.request, ' in cache, FETCHING!');
                  return fetch(event.request)
                    .then(function(response) {
                        const clonedResponse = response.clone();
                        caches.open(pageCache)
                          .then(function(cache) {
                              cache.put(event.request, clonedResponse);
                          })
                          return response;
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
              }
          })
    );
})