"use strict";var precacheConfig=[["/Portfolio/index.html","7221e68024828ea0f66592350bd7ffd4"],["/Portfolio/static/css/main.d5b6feb2.css","6901cb34143b4a2ce155239fe1a53998"],["/Portfolio/static/js/main.988a4797.js","cb914ef29dafc15591cace01de299029"],["/Portfolio/static/media/agenda2.bb6545ba.png","bb6545ba577e9da01776ebff5b16d01f"],["/Portfolio/static/media/agenda3.77148318.png","77148318fb2a41e43ed6d67c125dd2e9"],["/Portfolio/static/media/agenda4.d83119e1.png","d83119e1d7fbacd3c8ea807331a2ae2e"],["/Portfolio/static/media/agenda5.a57b4037.png","a57b40371401a05bc06a466bb8b480e7"],["/Portfolio/static/media/diana1.b6716637.png","b6716637dc0d71abce814ce4e2f3d61d"],["/Portfolio/static/media/diana2.608e36a6.png","608e36a68ed4109e49de724b4e3d1c0d"],["/Portfolio/static/media/diana3.13bdd055.png","13bdd0556b0acc7e024c7c9ddbef662f"],["/Portfolio/static/media/diana4.d40d6742.png","d40d6742981632cf35f322502882248a"],["/Portfolio/static/media/erniesoft.edd4f7ff.png","edd4f7ff272cf985219d1301a915e4dc"],["/Portfolio/static/media/erniesoft2.97ea3a16.png","97ea3a1658fb9e0a81597514a80dd87b"],["/Portfolio/static/media/erniesoftlogo.795335c3.png","795335c34761ea18d3a5a38f535424da"],["/Portfolio/static/media/robo.55e85a65.png","55e85a65b2ff3dc0daed1d7d488fcabc"],["/Portfolio/static/media/robo2.090d25c5.png","090d25c549b7cec77bb89d48743294ac"],["/Portfolio/static/media/robo3.ff8ff035.png","ff8ff035d382315eea9fe64c4c5c856b"],["/Portfolio/static/media/robo4.5fe074da.png","5fe074da2eafcd02bcd2383afc5ff6fa"],["/Portfolio/static/media/robomarkt-bezorg.3a805eaf.jpg","3a805eafc787a729dd3587074159c4e2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});