importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/007aa555c74749fb9685.js",
    "revision": "0c9038cfed2054dee21acc464ab03080"
  },
  {
    "url": "/_nuxt/08bb0900b37fff2c09eb.js",
    "revision": "f09bac5a6982d66dc9bd0e831d34d6bc"
  },
  {
    "url": "/_nuxt/3a35f5401b70cd687456.js",
    "revision": "c264ae5d80977955a280fa6baceaa484"
  },
  {
    "url": "/_nuxt/45d5a9f3e05a9e1f4b6c.js",
    "revision": "8e4627b9a5a5106e52b75bf520023193"
  },
  {
    "url": "/_nuxt/4a8630d8263a0db35afd.js",
    "revision": "44f2b22725f0bbdda043a3afcb7c1a12"
  },
  {
    "url": "/_nuxt/4bc9f9d1289cd2cafaa0.js",
    "revision": "c13181f45e917a18a2355c56b7033659"
  },
  {
    "url": "/_nuxt/5fb95423caa16bc36121.js",
    "revision": "a4d3fa0b3843a57cde0c92b3199f4428"
  },
  {
    "url": "/_nuxt/6256660cf3c05cbf1076.js",
    "revision": "5400d5e6a931e11361d9e23ee8d1324c"
  },
  {
    "url": "/_nuxt/859e986695b252874b36.js",
    "revision": "c8c391b2715d3af6e35c578b93da8143"
  },
  {
    "url": "/_nuxt/9e810042e0ae5addd4b8.js",
    "revision": "7dbd32908e1796983a7a1fb750603af7"
  },
  {
    "url": "/_nuxt/9fddbbd71b2a63430a24.js",
    "revision": "de048d2ad872e81a3ac441799f955010"
  },
  {
    "url": "/_nuxt/b301267ac699cfea96cb.js",
    "revision": "f1264c800cdd9c0692c2f75ffe2c872e"
  },
  {
    "url": "/_nuxt/b48ac070d8d174e6decc.js",
    "revision": "1fde1ab7fd5f1206eb22010829411ccb"
  },
  {
    "url": "/_nuxt/d8d06f66e2d4fe19acb3.js",
    "revision": "257735cbfa8d4c46ecb4740cc60b162f"
  },
  {
    "url": "/_nuxt/ee8166749b31a255a1c3.js",
    "revision": "b0a23024d2b662f502ce22989d46b4bd"
  },
  {
    "url": "/_nuxt/f56eae5b17d93da6eb59.js",
    "revision": "eda0eff4755c9725d3457810bf9d06d5"
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
