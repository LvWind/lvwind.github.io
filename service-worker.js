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

var precacheConfig = [["about/index.html","89f03d79179aab0aacc63ff5dc7702f7"],["android-o-broadcast/index.html","de2bd7cf2671f0ea3770d7650c262990"],["archives/2010/12/index.html","1e8f27f27811d844a182730ca5a9197b"],["archives/2010/index.html","0f190d37b430d85d1b6c2313b430850b"],["archives/2011/01/index.html","c9d4d78695396ae3a497715aa1ada755"],["archives/2011/02/index.html","280205d1c785cf3d0a023d1cc30f48c2"],["archives/2011/index.html","7e4ee3ac108fdb494bdcd536af4bc357"],["archives/2012/07/index.html","9fd1bb29fdcb99841feecfe2330b1272"],["archives/2012/index.html","41a5b4a6ff123214840465caad80a63d"],["archives/2016/01/index.html","774bced6e7c69d6010a08ac31612cfd9"],["archives/2016/02/index.html","af62f7ba639bfd90d876c7f0eca38adf"],["archives/2016/index.html","25e5a24ef28c2755003ab2cf8bab5240"],["archives/2017/08/index.html","67e8a0ea5d07af292cc208bcb3935f98"],["archives/2017/index.html","8ee0d8f26cecfe57ef304d1abaadb6cf"],["archives/index.html","d3afe7afdd16041171d32b241dac9947"],["categories/Android/index.html","8f4af38557125dd17371a384885863a0"],["categories/Android/瞎折腾/index.html","eecbb5b53feddf0fef6d0a11de605828"],["categories/index.html","b794690fa049bc9ba724c7d108c0c430"],["categories/吐槽成风/index.html","76eda11f2eea49f543e0213aa61ea13b"],["categories/瞎折腾/index.html","65679fb4ce4861e9965a469dda4c036b"],["css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["css/style.css","d2f2f49cb4ec48dfbebdefe06c7cff35"],["google-play-service-8-4-0-upgrade-error/index.html","e95a9bd0b126d311fed529658f401ca8"],["happy-new-year/index.html","2ecfaa7b6ef002eaf806086448c5c8fc"],["images/2010/12/homework.jpg","71735d2748a59fb785a9d47c5b7ce430"],["images/2011/01/Screenshot.png","bdc22791b440e851dc225ac58b716071"],["images/2011/02/calculator.jpg","e2e8eb801823c21774ec27f77d628979"],["images/2016/01/after_update.png","dd7cdd4c83ed183320fcd854ac63a010"],["images/2016/01/before_update.png","a7ac020d3b4fc27898835b45d200677d"],["images/2016/02/crodova_project_in_android_studio.jpg","b82012f02b4e7b7b7c0cc54b09c3d294"],["img/avatar.png","9eeaa42628cfbe3849b3734638ca6f3e"],["img/cc.png","40e8d4f2367ed503ec760572d78852de"],["img/favicon.png","73b6be46e10c5a65291e173acf41e7d7"],["img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["index.html","7dd4ea55fcea6a4007dacf4095e805e2"],["js/main.js","fc81c3ac91af03539453593760b962f8"],["js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["js/search.min.js","f901db6e7faecf102f487d3920540531"],["notitle/index.html","cfd28d2b1b280fed56a41447673e7ea9"],["restart-from-here/index.html","f0f972fb1a81706d1ed9a4afb5aaa0d0"],["search-spider-https/index.html","785f4c852e38e7cdc45b7f310a6d2465"],["shai-device/index.html","e2595a3bc91cd6fe96a7b7c384179c22"],["tags/https/index.html","5401fb6c53c51d5d3b1233a48d16c38f"],["tags/index.html","7cba72eab6f8e7004f034a453c801e5f"],["tags/wordpress/index.html","3fa63f9b97a01606b491b3f2f11777de"],["try-cordova-phonegap/index.html","a27155ab2d58fb323fa316204189b2a5"],["update-dell-inspiron-display-drive/index.html","8eac07b0b9d54c381bb4b7f899a5a28e"]];
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







