const CACHE_NAME = "purixa-crm-pwa-v21.1";
const APP_SHELL = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./purixa-logo.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if(event.request.method!=="GET") return;
  const url=new URL(event.request.url);
  if(event.request.mode==="navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/manifest.json") || url.pathname.endsWith("/sw.js")){
    event.respondWith(fetch(event.request).then(response=>{
      if(response.ok)caches.open(CACHE_NAME).then(c=>c.put(event.request,response.clone()));
      return response;
    }).catch(()=>caches.match(event.request).then(r=>r||caches.match("./index.html"))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response.ok)caches.open(CACHE_NAME).then(c=>c.put(event.request,response.clone()));
    return response;
  })));
});
