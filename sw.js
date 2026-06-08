// Service worker minimo para la PWA de Gold Coral.
const CACHE = "gold-coral-v3";
const CORE = [
  "/", "/index.html", "/styles/styles.css", "/scripts/script.js",
  "/sections/header.html", "/sections/home.html", "/sections/servicios.html",
  "/sections/about-us.html", "/sections/contacto.html", "/sections/footer.html",
  "/img/logo.png", "/img/icon-192.png", "/img/icon-512.png",
  "/downloads/", "/manifest.webmanifest"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(req).then((cached) =>
      cached || fetch(req).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match("/"))
    )
  );
});
