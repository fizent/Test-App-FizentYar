// self.addEventListener("install", (event) => {
//     console.log("Service Worker installing.");
//   });
  
//   self.addEventListener("activate", (event) => {
//     console.log("Service Worker activating.");
//   });
  
//   self.addEventListener("fetch", (event) => {
//     console.log("Fetching:", event.request.url);
//   });
  



const CACHE_NAME = "pwa-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/public/Fonts/Dirooz.woff2",
  "/public/Fonts/Dirooz.woff",
  "/icons8-home.svg",
  "/icons8-setting.svg",
  "/icon-user.svg",
  "/icons8-about.svg",
  "/icons8-close.svg",
  "/icons8-menü.svg",
  "/AiChat21.png",
  "/akhbar.jpg",
  "/Audio.png",
  "/Online-Weather-Forecast.jpg",
  "/myket.png",
  "/FizentYar192.png"
];

self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[ServiceWorker] Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => {
          // Optional: return fallback offline page or image
        })
      );
    })
  );
});
