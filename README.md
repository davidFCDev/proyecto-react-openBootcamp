# Generación de funcionalidades PWA en aplicación existente
¿Qué pasos hace falta dara para convertir esta app en una Progressive Web App?
1. Package.json -> Instalar todas las dependencias de Workbox:

    "workbox-background-sync": "^6.5.4",
    "workbox-broadcast-update": "^6.5.4",
    "workbox-cacheable-response": "^6.5.4",
    "workbox-core": "^6.5.4",
    "workbox-expiration": "^6.5.4",
    "workbox-google-analytics": "^6.5.4",
    "workbox-navigation-preload": "^6.5.4",
    "workbox-precaching": "^6.5.4",
    "workbox-range-requests": "^6.5.4",
    "workbox-routing": "^6.5.4",
    "workbox-strategies": "^6.5.4",
    "workbox-streams": "^6.5.4"

2. Crear los archivos relacionados con el service worker (service-worker.js + serviceWorkerRegister.js).

3. Referenciar el serviceWorker desde el index.js



# Proyecto React del Open Bootcamp
