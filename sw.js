console.log('Service Worker: Registered');

// Name of cache to be created
const pageCache = 'cacheV1';

// Resources to be cached
const urlsToCache = [
    '/FEND-Restaurant-Reviews-App',
    '/FEND-Restaurant-Reviews-App/index.html',
    '/FEND-Restaurant-Reviews-App/restaurant.html',
    '/FEND-Restaurant-Reviews-App/css/styles.css',
    '/FEND-Restaurant-Reviews-App/js/dbhelper.js',
    '/FEND-Restaurant-Reviews-App/js/main.js',
    '/FEND-Restaurant-Reviews-App/js/restaurant_info.js',
    '/FEND-Restaurant-Reviews-App/data/restaurants.json',
    '/FEND-Restaurant-Reviews-App/img/1.jpg',
    '/FEND-Restaurant-Reviews-App/img/2.jpg',
    '/FEND-Restaurant-Reviews-App/img/3.jpg',
    '/FEND-Restaurant-Reviews-App/img/4.jpg',
    '/FEND-Restaurant-Reviews-App/img/5.jpg',
    '/FEND-Restaurant-Reviews-App/img/6.jpg',
    '/FEND-Restaurant-Reviews-App/img/7.jpg',
    '/FEND-Restaurant-Reviews-App/img/8.jpg',
    '/FEND-Restaurant-Reviews-App/img/9.jpg',
    '/FEND-Restaurant-Reviews-App/img/10.jpg'
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
