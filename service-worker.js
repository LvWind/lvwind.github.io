/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","58174f838dc031b92fe53ab067b52e54"],["android-o-broadcast/index.html","796025ff1ed5fe83b939680929fda133"],["archives/2010/12/index.html","48cca16224c73a0964dafbc1611f5f8f"],["archives/2010/index.html","38679a4935b5e9c1cfc6ee7a95b18119"],["archives/2011/01/index.html","113f23f8a3ecd81de4e2df77785f5789"],["archives/2011/02/index.html","790a14fa44d04ae3bf711707b4a82acf"],["archives/2011/index.html","feef29e2598846535cef5a996b343b42"],["archives/2012/07/index.html","3701ed2e2ee0c01e300827271c4ec53b"],["archives/2012/index.html","fa9071d19f78bf45fb27fde18e230c2b"],["archives/2016/01/index.html","3cec235ae1ba444fd65c291a87b341f8"],["archives/2016/02/index.html","43bb8c598b589dc9cc062fec03082ede"],["archives/2016/index.html","803e6188c16c612386a66a6d89426691"],["archives/2017/08/index.html","01acab51d1fca811d2ddada533196bfb"],["archives/2017/index.html","8fdab006a3ad009020bd442db10620fd"],["archives/2018/11/index.html","21bcbddc864c2d4d5e5bdd1a6edc6e1c"],["archives/2018/index.html","615dd57ad0a6dfcd709204e1c17b9795"],["archives/index.html","a3ce904aa009cb5562651101c9191d55"],["categories/Android/index.html","98a635bef9e67157686cb9c8052c1c70"],["categories/Android/瞎折腾/index.html","0b92a040921db1d4f3d6f456d039e19f"],["categories/index.html","05737b5841630e49c12945821c82a987"],["categories/吐槽成风/index.html","2cfd838bb247dcedf708162c357ee371"],["categories/瞎折腾/index.html","0c42ad306cc0e9f3b45d63f0d442ea32"],["css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["css/style.css","d2f2f49cb4ec48dfbebdefe06c7cff35"],["google-play-service-8-4-0-upgrade-error/index.html","98e7086eaaece2c5da88847912956849"],["happy-new-year/index.html","088e1b226b3db490610baaaa425135b8"],["images/2010/12/homework.jpg","71735d2748a59fb785a9d47c5b7ce430"],["images/2011/01/Screenshot.png","bdc22791b440e851dc225ac58b716071"],["images/2011/02/calculator.jpg","e2e8eb801823c21774ec27f77d628979"],["images/2016/01/after_update.png","dd7cdd4c83ed183320fcd854ac63a010"],["images/2016/01/before_update.png","a7ac020d3b4fc27898835b45d200677d"],["images/2016/02/crodova_project_in_android_studio.jpg","b82012f02b4e7b7b7c0cc54b09c3d294"],["img/avatar.png","9eeaa42628cfbe3849b3734638ca6f3e"],["img/cc.png","40e8d4f2367ed503ec760572d78852de"],["img/favicon.png","73b6be46e10c5a65291e173acf41e7d7"],["img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["index.html","ccd3e5b27dca34594b8621003133d44a"],["js/main.js","fc81c3ac91af03539453593760b962f8"],["js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["js/search.min.js","f901db6e7faecf102f487d3920540531"],["notitle/index.html","d205c9bae35c9834a4e42ab21c0a0cf0"],["restart-from-here/index.html","4315e3ab5bfc28189a5a5e24e8237357"],["search-spider-https/index.html","60ea91eae13a02f3113a1f1f76dc37bb"],["shai-device/index.html","ebd8ebc8327e8d949987ce8c07bb4e7a"],["tags/https/index.html","a91e34a1fdad5059173218adbf11d77b"],["tags/index.html","61e1484a737fe5c9aefb0f4d06d64d4b"],["tags/wordpress/index.html","e79112d4f444999915073f756b587e69"],["try-cordova-phonegap/index.html","196c9e8efd27c94a73a2cdc7aea9a648"],["update-dell-inspiron-display-drive/index.html","d835e3b507ac9800913d80ef2a300e27"],["upgrade-sony-wi-1000x-china-ver/index.html","605a8e4d70fda6f2b8dbb8912285ecbe"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







