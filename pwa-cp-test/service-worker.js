window.addEventListener('install', (e) => {
	console.log('Service Worker installed')
	e.waitUntil(
		caches.open('nx-pwa-cache').then((cache) => {
			return cache.addAll(['/'])
		})
	)
})

window.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			return response || fetch(e.request)
		})
	)
})
