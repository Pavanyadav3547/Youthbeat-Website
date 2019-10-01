importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1198334a98d007efbe9b.js",
    "revision": "5de4f906850bb3f92c00baa4e0a18db7"
  },
  {
    "url": "/_nuxt/23c4f02c0020cc696f39.js",
    "revision": "9de2c02689d67504aa4a0046503a1eb1"
  },
  {
    "url": "/_nuxt/2fbba958bc7ca6005296.js",
    "revision": "94ac232289dc0861e24f3a890801c3cf"
  },
  {
    "url": "/_nuxt/4c868654f220d426cb91.js",
    "revision": "0e83b5ecd496d4d5ab8a1a99d72db820"
  },
  {
    "url": "/_nuxt/4f49db823ba3e1067e6b.js",
    "revision": "516acdc92dfb25220bbf13c9af857759"
  },
  {
    "url": "/_nuxt/58bc499d05973de3edea.js",
    "revision": "3e3520cfaf67b248e7ef6d418d7b7e76"
  },
  {
    "url": "/_nuxt/7aea9c408a0419ee6362.js",
    "revision": "3748725842317d7289ea017cf8ee070a"
  },
  {
    "url": "/_nuxt/7efd0fda4a43b0f88b76.js",
    "revision": "421406de43eb41dee623a262f9248832"
  },
  {
    "url": "/_nuxt/8147bb6679a70285f431.js",
    "revision": "2eecc5b3db66e78638905f4865a3ed73"
  },
  {
    "url": "/_nuxt/815cf016b2d6e6e46ac2.js",
    "revision": "da4f2af0b21069892c1aa9ef8bc23d3b"
  },
  {
    "url": "/_nuxt/a43e7a735c81716a5b83.js",
    "revision": "9986ec78c1b152f726e4580e41fbd54c"
  },
  {
    "url": "/_nuxt/bd02c59bee768add3dd1.js",
    "revision": "5d57b2d6e05db8812d36b314a08f16f3"
  },
  {
    "url": "/_nuxt/bd123b036e6e28805f62.js",
    "revision": "d4d44457f2922b23074d7c4ba1a06a98"
  },
  {
    "url": "/_nuxt/c2ce30f433332e954f6b.js",
    "revision": "6b393908b146a83acca9f4af9364711e"
  },
  {
    "url": "/_nuxt/d42caf2ee4f03bda1c13.js",
    "revision": "e29bf46bf858a2357713eddcfaa86a63"
  },
  {
    "url": "/_nuxt/ec503a53d2473121ea17.js",
    "revision": "a91cab209720cba35e25150350a0114d"
  },
  {
    "url": "/_nuxt/f8cfa81eb4391f12e49c.js",
    "revision": "fff87cb7e6b48033c0c1a4f7934cc6f9"
  }
], {
  "cacheId": "YouthBeat",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
