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
  "/FizentYar192.png",
  // اگه فایل fallback دارید، اون رو هم اضافه کنید
  "/fallback-image.png",
  "/icons8-back-arrow-64.png",
  "/cloudy-night-3.svg",
  "/rainy-2.svg",
  "/Loading.svg"
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

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // پاسخ از کش
      }
      // درخواست شبکه
      return fetch(event.request)
        .then((networkResponse) => {
          // کش کردن پاسخ‌هایی که موفقیت‌آمیز است
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
        })
        .catch(() => {
          // در صورت نبود اتصال اینترنت، برگرداندن fallback
          if (event.request.destination === 'image') {
            // تصویر fallback رو برمی‌گردونیم
            return caches.match('/fallback-image.png');
          }
          // برای صفحات، می‌تونی یه صفحه خطای offline بده
        });
    })
  );
});