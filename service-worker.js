
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("her-fate-cache").then(function(cache) {
      return cache.addAll([
        "./Choose_Her_Fate_Ultimate_SlotMachine.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
