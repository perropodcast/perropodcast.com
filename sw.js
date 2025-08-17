// Service Worker de Monetag
self.addEventListener('install', function(event) {
  console.log('Monetag SW instalado');
});

self.addEventListener('activate', function(event) {
  console.log('Monetag SW activado');
});

// Aquí Monetag inyectará su propio código cuando lo verifique
