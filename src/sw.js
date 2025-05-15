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
  "/Fonts/Dirooz.woff2",
  "/Fonts/Dirooz.woff",
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

// نصب و کشتن
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
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[ServiceWorker] Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      // اگر کش نشد، تلاش کنیم شبکه
      return fetch(event.request).then((networkResponse) => {
        // در صورت موفقیت، کش کن برای درخواست‌های بعدی
        if (
          event.request.method === "GET" &&
          networkResponse.status === 200 &&
          networkResponse.type === "basic"
        ) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // اگر نتوانست آنلاین لود کند، می‌تونی یک صفحه خطا یا آیکونی offline برگردونی
        // مثلا:
        // if (event.request.destination === 'image') {
        //   return caches.match('/fallback-image.png');
        // }
      });
    })
  );
});