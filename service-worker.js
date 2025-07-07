self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("astra-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "icon-192.png",
        "icon-512.png",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
