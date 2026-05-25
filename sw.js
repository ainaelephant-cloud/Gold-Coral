// Service worker minimo para la PWA de Gold Coral.
// Cachea los recursos propios (mismo origen) para instalacion y uso offline basico.
const CACHE = "gold-coral-v1";
const CORE = [
  "/",
  "/index.html",
  "/styles/styles.css",
  "/scripts/script.js",
  "/sections/header.html",
  "/sections/home.html",
  "/sections/servicios.html",
  "/sections/about-us.html",
  "/sections/contacto.html",
  "/sections/footer.html",
  "/img/logo.png",
  "/img/icon-192.png",
  "/img/icon-512.png",
  "/downloads/",
  "/manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Solo recursos propios (mismo origen) y peticiones GET.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) {
    return;
  }
  event.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req)
        .then((resp) => {
          const copy = resp.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          return resp;
        })
        .catch(() => caches.match("/"))
    )
  );
});
