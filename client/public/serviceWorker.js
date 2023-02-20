let CACHE_NAME = 'CRUL-cache-v1';
const urlsToCache = [
    '/',
    '/showcase',
    '/create-image'
];

// Install a service worker
self.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache)=>{
                console.log('Opened Cache');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Cache and return requests
self.addEventListener('fetch', (event)=>{
    event.respondWith(caches.match(event.request)
        .then((response)=>{
            if(response){
                return response;
            }
            return fetch(event.request);
        })
    )
})

//Update a service worker
self.addEventListener('activate', (event)=>{
    let cacheWhitelist = ['CRUL-cache-v1'];
    event.waitUntil(
        caches.keys()
        .then((cacheNames)=>{
            return Promise.all(
                cacheNames.map(cacheName=>{
                    if(cacheWhitelist.indexOf(cacheNames) === -1){
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})