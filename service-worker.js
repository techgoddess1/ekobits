"use strict";var precacheConfig=[["/techgoddess1/ekobits.git/index.html","c8e92f27ddfa69ab19330518f110acda"],["/techgoddess1/ekobits.git/static/css/main.07da741b.css","0cf91b4da826019a25d46f8762e63117"],["/techgoddess1/ekobits.git/static/js/main.7d1ecd97.js","48234881448649741979fbff62dd07c8"],["/techgoddess1/ekobits.git/static/media/OpenSans-Light-webfont.1c14c82e.svg","1c14c82e579e9f564678d3c31c4bd204"],["/techgoddess1/ekobits.git/static/media/OpenSans-Light-webfont.5730cb1a.eot","5730cb1af0272e9923d68c8aebeb6056"],["/techgoddess1/ekobits.git/static/media/OpenSans-Light-webfont.70fb3d3d.woff","70fb3d3dc1833a6c5d41ab76e7f7508d"],["/techgoddess1/ekobits.git/static/media/OpenSans-Light-webfont.cf4f8f2c.ttf","cf4f8f2c1013afed762589bb5ff756af"],["/techgoddess1/ekobits.git/static/media/OpenSans-Regular-webfont.65eb1ec3.eot","65eb1ec3bbe3cbe8e6acd8c3db5abd8b"],["/techgoddess1/ekobits.git/static/media/OpenSans-Regular-webfont.96f62f54.woff","96f62f549352cef6d2fb7c71ac9133d0"],["/techgoddess1/ekobits.git/static/media/OpenSans-Regular-webfont.98b25ed8.ttf","98b25ed8f8a57633895435395edf05d4"],["/techgoddess1/ekobits.git/static/media/OpenSans-Regular-webfont.fc23d78d.svg","fc23d78d5be71aa79bfd3765cdd53e3f"],["/techgoddess1/ekobits.git/static/media/arrows.d7d00634.png","d7d0063470d9b63c6734e4e7c14f002a"],["/techgoddess1/ekobits.git/static/media/bg-1.f94262b1.jpg","f94262b19e5b8cd583b82f614cc8d090"],["/techgoddess1/ekobits.git/static/media/bg-2.280545cb.jpg","280545cba6fac4927f5f47351d9011b3"],["/techgoddess1/ekobits.git/static/media/bg-3.16547491.jpg","16547491dcc458f6254d528f55a60f69"],["/techgoddess1/ekobits.git/static/media/bg-4.30a9b595.jpg","30a9b5955752ab37ddd664b48533280b"],["/techgoddess1/ekobits.git/static/media/bg-5.85a1d05d.jpg","85a1d05d1553b4a3963e43faff57f681"],["/techgoddess1/ekobits.git/static/media/bg-6.cf7b1c68.jpg","cf7b1c68092d5df154291905c55d0e36"],["/techgoddess1/ekobits.git/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/techgoddess1/ekobits.git/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/techgoddess1/ekobits.git/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/techgoddess1/ekobits.git/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/techgoddess1/ekobits.git/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/techgoddess1/ekobits.git/static/media/wallet.19c4bfcb.svg","19c4bfcb29c3434f14ec2d4934757910"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=t),s.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,s,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var s=new URL(t).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,s){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return s.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],s=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,s,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!s.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!s.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,s=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,a),e=urlsToCacheKeys.has(s));var n="/techgoddess1/ekobits.git/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(s=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(s)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});