self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("amor-cache").then((cache) => {
      return cache.addAll(["/", "index.html", "manifest.json", "love.png"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
