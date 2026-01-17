// const CACHE_NAME = "adrs-techno-cache-v1";

// // Files that must be available offline
// const OFFLINE_ASSETS = [
//   "/",
//   "/index.html",
//   "/manifest.json",
//   "/logo-dark.png",
// ];

// // Install: cache core files
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(OFFLINE_ASSETS);
//     })
//   );
//   self.skipWaiting();
// });

// // Activate: clean old cache versions
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((keys) =>
//       Promise.all(
//         keys.map((key) => {
//           if (key !== CACHE_NAME) {
//             return caches.delete(key);
//           }
//         })
//       )
//     )
//   );
//   self.clients.claim();
// });

// // Fetch: offline-first strategy
// self.addEventListener("fetch", (event) => {
//   const { request } = event;

//   // ❌ Skip backend APIs (Node / Render / any API)
//   if (
//     request.url.includes("/api") ||
//     request.url.includes("onrender.com")
//   ) {
//     return;
//   }

//   // ✅ React Router navigation support
//   if (request.mode === "navigate") {
//     event.respondWith(
//       fetch(request).catch(() => caches.match("/index.html"))
//     );
//     return;
//   }

//   // ✅ Cache-first for static assets
//   event.respondWith(
//     caches.match(request).then((cached) => {
     

//       return fetch(request)
//         .then((response) => {
//           const responseClone = response.clone();
//           caches.open(CACHE_NAME).then((cache) => {
//             cache.put(request, responseClone);
//           });
//           return response;
//         })
//         .catch(() => cached);
//     })
//   );
// });

const CACHE_NAME = "adrs-techno-cache-v2";

const OFFLINE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/logo-dark.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.url.includes("/api") || request.url.includes("onrender.com")) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, clone);
        });
        return response;
      });
    })
  );
});

