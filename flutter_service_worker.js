'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d869247515f9e1dcc9c5aaf12aba6cf8",
"assets/AssetManifest.bin.json": "38d8b4c4c3e4e9144354123b5b3a0942",
"assets/AssetManifest.json": "c078503769b91c75098107d8e8feea88",
"assets/assets/icons/adm_andamento.png": "60917ded43bb0f1943baf30efa896ccf",
"assets/assets/icons/adm_equip.png": "18adfa22236b3be416bc8c16625f7872",
"assets/assets/icons/adm_pendente.png": "03018fac1f29aa9c0e7f9a24917b7bda",
"assets/assets/icons/adm_resolvido.png": "36e23ec5a22872b53bcb2bc2a09b5fb9",
"assets/assets/icons/assist_soc_andamento.png": "01ee4350dc5f9f2017b15c69809f396f",
"assets/assets/icons/assist_soc_equip.png": "9f26a3e6d54397250ffa847408c6af4f",
"assets/assets/icons/assist_soc_pendente.png": "638e1215bd2af4c4120a1c5e45c43822",
"assets/assets/icons/assist_soc_resolvido.png": "800c64cacf0614e038369c74f929797f",
"assets/assets/icons/com_andamento.png": "7323d5c162be7aa701e0219f354650e2",
"assets/assets/icons/com_equip.png": "dbe14a0dbbfd6ff34c43a74eec5abe12",
"assets/assets/icons/com_pendente.png": "9891b7ac5fd1d8c2783ed71dde2d599d",
"assets/assets/icons/com_resolvido.png": "c9c4ff8a88ab67c1499580deccc89d15",
"assets/assets/icons/control_andamento.png": "947449b6a9421201ebf9faa1bfb5f598",
"assets/assets/icons/control_equip.png": "3b8a0f4ebc86c6a27a0ded681a6a4ae7",
"assets/assets/icons/control_pendente.png": "9f40b0163c4a25c5258068b3a7e8186e",
"assets/assets/icons/control_resolvido.png": "a49a635b92000f172893e954ad352417",
"assets/assets/icons/cultura_andamento.png": "a3c4cf729cbdb9cd663ab71d19b02472",
"assets/assets/icons/cultura_equip.png": "6c94429c3752bd6a3d4afdd52710a4ee",
"assets/assets/icons/cultura_pendente.png": "7a3f945ef0b34236938ed0f2f9746e94",
"assets/assets/icons/cultura_resolvido.png": "9049090f4b284601d1c4204147b4e996",
"assets/assets/icons/dev_eco_andamento.png": "853aaa07da60cd594169b8b57df0d921",
"assets/assets/icons/dev_eco_equip.png": "c1b83c0ca192714103ff6848ea2a6afc",
"assets/assets/icons/dev_eco_pendente.png": "11832e4fea08e35e5bee292c41c52f7d",
"assets/assets/icons/dev_eco_resolvido.png": "c52843a5f6a92c4f4d56079e809b6ebf",
"assets/assets/icons/dev_hab_andamento.png": "7b01b5fc7cf5e67c74024450c21a26d6",
"assets/assets/icons/dev_hab_equip.png": "c950c17fc78cb1f76153ed6beffa111e",
"assets/assets/icons/dev_hab_pendente.png": "21a40cb7aaee432877f63df013df3010",
"assets/assets/icons/dev_hab_resolvido.png": "9c62b6454f88089ab4cddc434bf56f78",
"assets/assets/icons/educ_andamento.png": "d353cec2dc1643ab8146f9fae8fb4ed7",
"assets/assets/icons/educ_equip.png": "19825ecdf82fe2bba8a8020bcd547463",
"assets/assets/icons/educ_pendente.png": "852e412ed1753bb78dab5f875117ebb9",
"assets/assets/icons/educ_resolvido.png": "9f45e5d51df62b988b9ec974917e8f24",
"assets/assets/icons/esp_andamento.png": "3f493e889b772c62ee4e90bfbcf32006",
"assets/assets/icons/esp_equip.png": "b4b6438eb2f4124d7d1c5a3c0d35bc37",
"assets/assets/icons/esp_pendente.png": "3bb3840da7128d304a43c94b8ac38980",
"assets/assets/icons/esp_resolvido.png": "89e76fd9865f70def049edc011d38ce4",
"assets/assets/icons/fazenda_andamento.png": "b861e37ffb2f5f44801d6777ebc8388a",
"assets/assets/icons/fazenda_equip.png": "7e12f0ef012a93bdf3246462c5e1b26d",
"assets/assets/icons/fazenda_pendente.png": "a21c9f8fcae685e5b1bc8e85de2d5f96",
"assets/assets/icons/fazenda_resolvido.png": "b7e390b306690a1946d4f4fe3e950c98",
"assets/assets/icons/gabinete_andamento.png": "eef0072cd302f55fb7322354e885b099",
"assets/assets/icons/gabinete_equip.png": "4d4719554953b30137d097fa18eff81b",
"assets/assets/icons/gabinete_pendente.png": "c74a2b046fae9648f1be41756f918445",
"assets/assets/icons/gabinete_resolvido.png": "952ec890bc94098a553f95808dcde9a2",
"assets/assets/icons/gov_andamento.png": "65cc47b7af8579d694cd1f99b314f8d6",
"assets/assets/icons/gov_equip.png": "b3f82d769ddf71e64e90632b284ad9cb",
"assets/assets/icons/gov_pendente.png": "6ca08e39a29761bf01f0b73c59c489d6",
"assets/assets/icons/gov_resolvido.png": "b2c7a1b32163fe4d3b24b2071a75aa7e",
"assets/assets/icons/ic_marker_type1.png": "2703a2ccb99685200ede9cb7f8efbf90",
"assets/assets/icons/ic_marker_type2.png": "aaf467afc0c1a6547e82adbc6531a067",
"assets/assets/icons/ic_marker_type3.png": "66c2a1ea7ffffadfdb1bdaa91ddfe8f9",
"assets/assets/icons/ic_marker_type4.png": "a735b1efefc48bf0b6ee501e81ee7b26",
"assets/assets/icons/ic_marker_type5.png": "a884b2f172caaabdad974a821d8ed781",
"assets/assets/icons/obras_andamento.png": "e328523c1c50e3223bc8ffc0a1929e85",
"assets/assets/icons/obras_equip.png": "331ae31bb3ac4b3633ad362f67376e52",
"assets/assets/icons/obras_part_andamento.png": "6719a862e43f0f856d0f190f50199804",
"assets/assets/icons/obras_part_equip.png": "57107f58f4f5e35c6520b2b0efea465f",
"assets/assets/icons/obras_part_pendente.png": "3930ba675f1230c212b367279c1c56b4",
"assets/assets/icons/obras_part_resolvido.png": "6b7b5fce72e4ce3151b44e4c7d608076",
"assets/assets/icons/obras_pendente.png": "97a066630673c6fa1c53a8d1b8030d75",
"assets/assets/icons/obras_resolvido.png": "70789bbe917462816576e95f81e751c1",
"assets/assets/icons/plan_andamento.png": "22f6f320d4668fc4979f10028f9961ee",
"assets/assets/icons/plan_equip.png": "1db9492fd18956e1170e328f1b895390",
"assets/assets/icons/plan_pendente.png": "f13ff961111b45328990bb8ae4a5ae93",
"assets/assets/icons/plan_resolvido.png": "831f190bc9ffb9e3a96f6c326f28d73a",
"assets/assets/icons/saude_andamento.png": "741c46f47d94f3c68aef458423567243",
"assets/assets/icons/saude_equip.png": "6b85d05e0627e2b2b1d92ede2fd6b948",
"assets/assets/icons/saude_pendente.png": "5c2616fac67c4a9cd76978ce409e0058",
"assets/assets/icons/saude_resolvido.png": "f1abf899fae3d28ec3244098812b2047",
"assets/assets/icons/seg_andamento.png": "43573e7e187ca7d2db3c45467844d86e",
"assets/assets/icons/seg_equip.png": "16aeab3beb91762ad32d4651dcf68039",
"assets/assets/icons/seg_pendente.png": "417fd9f3d7d8c78b208641d24570927d",
"assets/assets/icons/seg_resolvido.png": "aaee52c026b0df92879cb3773358f02f",
"assets/assets/icons/serv_urb_andamento.png": "fda18e00ea7e40c1d675922ca1e93cee",
"assets/assets/icons/serv_urb_equip.png": "6bb5ebb9d93613a5a7aa066307db5d7e",
"assets/assets/icons/serv_urb_pendente.png": "c8d14744beb43acae7f02d76e3a8e49c",
"assets/assets/icons/serv_urb_resolvido.png": "834820ece77c8c9b69dfa1e00b1b24fc",
"assets/assets/icons/transito_andamento.png": "89e683c8c1c6aa04ceffbf0ec8d1c1d5",
"assets/assets/icons/transito_equip.png": "5bd5326d38f490620d7207db4412caba",
"assets/assets/icons/transito_pendente.png": "24b1dc1a80179d5ccf474893e2c353e7",
"assets/assets/icons/transito_resolvido.png": "d728a1f1fa38125fa605619209f9a688",
"assets/assets/icons/verde_andamento.png": "96c785d4a56ff742c450857a75770952",
"assets/assets/icons/verde_equip.png": "be0cc2451a844f9eee6b10c6a9c1634f",
"assets/assets/icons/verde_pendente.png": "f0fbabd22f5d3a2c1ffe61e0b9082a9b",
"assets/assets/icons/verde_resolvido.png": "665c934691a3e849906e3189ba72f806",
"assets/assets/images/background_prefeitura.jpg": "aa9d759e542260474e4dc5ec056c7a1e",
"assets/assets/images/logo_cgm.png": "2277bf8ddcc0544fe3e548501b054d40",
"assets/assets/images/logo_ferraz.png": "db906b75009ace33c3f720d13b103ca0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "bb0ea0ba57aa45c1d8d30262d5db0054",
"assets/NOTICES": "4b21bd6e002ad24fcf967a5644a50149",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "85587cdf92ee4ce1a92c42505d9f0a50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65ab06ae901998cbe8ef5d3aeffae6cb",
"/": "65ab06ae901998cbe8ef5d3aeffae6cb",
"main.dart.js": "c8d4ee00f1421197323bf1eced1a085e",
"manifest.json": "e36d1ae96bc3c9438ef99db8697b5a3a",
"version.json": "0d210568b4f4f5aa09f26045c452e55b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
