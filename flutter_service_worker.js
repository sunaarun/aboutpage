'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9aabd2759fb9acf402df5cac8f4da5cb",
".git/config": "82d5d1ae1ecf29fcb79526efee1d673a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "11f7eeb614c2bf0efc067d4fa1c4600a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9bbc9f98d522ea5530b58acdba5cb81e",
".git/logs/refs/heads/master": "9bbc9f98d522ea5530b58acdba5cb81e",
".git/logs/refs/remotes/origin/master": "62514a645c162dc1668caeaec7766991",
".git/objects/01/3b461caea6aec28c244ef35df4ddc623ba01df": "e5f580216b92c2cf2f09cd570762db8c",
".git/objects/0f/91fdf1f6604e39d31495cd4b6cdbb5e9d2ede3": "889a1c9778aeb3424977f392f80504e2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/af4785552c28757d5164c318698dfbbcfb0308": "621c253206e5f5e1c4d59554e7edc221",
".git/objects/29/0bc12b3c4fdacc1afb6c3c307d3bff8dc02cf0": "b34a1151cd1e1539fcfaf5947474de77",
".git/objects/35/d440f9ddc8a332f789a00f33942f49f2ba7841": "7567189be8e50fa144047fee3c9da3db",
".git/objects/39/02df1c43da40f3ef94e5ee808978825914e844": "9dfb37c5d7561298e15473ea353c5a16",
".git/objects/3b/3306a2de9eb4d30762c7d60d7c9628bc6f64db": "f3a601bd936ef0ae0d94d5a35321f426",
".git/objects/3f/a5318b7e2dbd88bb29cbe840f277aa19d74eeb": "66dd8bdf6577cc1ebc6f05c0894a44be",
".git/objects/40/af27f7b2a2fd03c10625afcf9ebd5ff24ef0ae": "84e041235f7527ab672c7c1954702529",
".git/objects/41/a90f3668d7297c37f4f5d8f528d6a88df325ca": "b3170e6bfa57c2b4fa0716abd26e0f13",
".git/objects/5d/78810c22da71f4981e75ebfc8be834966b4790": "4e8ef21364c31a4deaa1c73224d4bee7",
".git/objects/63/e3453411384a3f62c3781d866b38e3285d79eb": "a1588a148f87b990936d3df3a05bd732",
".git/objects/6a/63fe39bc7ccdd535e4c5a2073b8270e4ce0f8c": "84f9062615035a8618bdfc7a11118503",
".git/objects/6c/1d532ea63794ba01c58526666b225aedecb9d7": "4d52ec75625caff35e5dffd8134ca07a",
".git/objects/6c/41aab2b8a51f7fc60b554231949f1352cb1b1f": "24099b04ca45fc2f1688b329268a7f4c",
".git/objects/79/41ed20c0d63106f84dd30bf59131ce72b8945c": "71b877facf6e2a4b4cebdfee5ede7dd3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/c72978b4aa17823c92d0a4c20c9ab34d047009": "93eb94c2fd1308bd3d2cab716a420f2a",
".git/objects/80/327f877028cd1a3080458e9fd12ba22df99cbd": "8b8beb9d89c4b5d80fa890c45c35882b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/45832b615074bc0ca2c9eee3e5804cac78a48f": "5aafcac99ea66cb1127b196a5a5eb722",
".git/objects/8e/bd9b5b00020dddc868a37e2cac911408d5c0ef": "7c478b7d875a0fb9dc8908e94fa80a1c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/1123bea4836882ac88d50823ec2b67359b6b6b": "cdbe1f8a67c53e3384a6b2af00ab6afb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/576e2e10aa03c089226b04a09a89e66cc04bfa": "9f333219caf0caa0fc2120556a23e033",
".git/objects/b7/09a9f913a2c32d3a916146e658a1085136fce6": "ad04f6ccddca2d85fb7e992eb30fe214",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/5573250664d4417b11b2c7e074be30839ec57a": "f3fe17ed1c2ef86d3b2cae3eb5da0abf",
".git/objects/bf/fa14b905a823554b449e259c28753e7ffc2e77": "c06d14e0651b7b8a8d6d66ae8c09e07b",
".git/objects/c2/344f4675d2bc2e2ccae931241fab242adb9f59": "004c44d9a97633b387ce0632e330da72",
".git/objects/c9/ddedf732f951ee3704c42c6fc2712f64ba3e4e": "1a4b4fbb5ba2e965d2dbbde46044310e",
".git/objects/cb/a7a3608668db526432a59e64ee78b96935652b": "f36f676f04509507bd942b3aafb93643",
".git/objects/d6/55527bd58ca17bba647e757cd28eb13d609655": "6f3a08bdaaf4d1bbef5d4660db1ba01f",
".git/objects/da/f2cfc07e3733099847683db3c59a4482d8ff47": "a368c95e00098db7e91ddc540738a483",
".git/objects/e4/ba6b4e61f0fc7bbbd2a3f0033fa147c7bcdfd1": "90816279c2563e2ea79a04b40016f4c1",
".git/objects/e5/3ac86f5f91785a969260f7ad3a8e342e77c999": "f3c82f32a042afa88da77f33cf462414",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/87cec4ef3297ac825f4a3968d027747bbccce2": "883fb57d0b3c641ae1943df830a75980",
".git/objects/f0/81b0cd8aae4baf7390a0e3012eb013048dbdfb": "f08421d9b0fc1eddad86bbf635a82dc1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fc/0d09503a88a5a9f4ac9d4eebf6beff5aa6fcf0": "0edb8470235a0353f41e52672b6741b5",
".git/refs/heads/master": "69d1fdd2b38ab9c881c695b151fa9bbb",
".git/refs/remotes/origin/master": "69d1fdd2b38ab9c881c695b151fa9bbb",
"assets/AssetManifest.json": "a7437e37972dd1a06768748358642e89",
"assets/assets/fonts/PTSerif-Bold.ttf": "1e0973a44ba414079dae48c6d8051cb3",
"assets/assets/fonts/PTSerif-Italic.ttf": "c00e79bbf1a949f6de98986b198d98f6",
"assets/assets/fonts/PTSerif-Regular.ttf": "5f7303c0e7f09925586e218ab8fd9b19",
"assets/assets/images/git.png": "3480db5eabd3ef35cf349caa44c5171e",
"assets/assets/images/hc.png": "b1c7179de5b48ec3ef18b7dfbe213431",
"assets/assets/images/ic2.png": "23389956ab654467d58f60e11afbaf87",
"assets/assets/images/icon.png": "603d11fd8f368348ad7171576d49f19b",
"assets/assets/images/linked.png": "59bee18568d77beeec90e324f299d20d",
"assets/assets/images/play.png": "bbf94620e9cbe6984a35ac73a4b43d50",
"assets/assets/images/stack.png": "acb71e0f82f275957f59f032221e25d1",
"assets/FontManifest.json": "2db7d9a46849e38631f4b6a72fe4fcb7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "386dd261e643ec87d811b44a1d9e885a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4d1b6d8d9192e7e450e753cdbf714306",
"/": "4d1b6d8d9192e7e450e753cdbf714306",
"main.dart.js": "b8380cafc03bffb4798a9e808929fa05",
"manifest.json": "cdcfd343ad91f76afcb92d95d1fb0e52",
"version.json": "226ffbfd9af6788642489dd8d80fd519"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
