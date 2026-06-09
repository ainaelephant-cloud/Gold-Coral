// Service worker minimo para la PWA de Gold Coral.
const CACHE = "gold-coral-v5";
// Páginas/recursos del área privada: nunca se cachean (siempre desde red).
const BYPASS = ["/acceso.html", "/area.html", "/styles/area.css", "/scripts/supabase-config.js"];
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
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  // El área privada siempre va a red, sin tocar el caché.
  if (BYPASS.some((p) => url.pathname === p)) {
    e.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }
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
