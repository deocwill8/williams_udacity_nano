// const versionNumber = "williams-sw-v1"

// self.addEventListener("install", function(event){
//     event.waitUntil(
//         caches.open(versionNumber).then(function(cache){
//             return cache.addAll([
//                 "/",
//                 "/img",
//                 "/js/main.js",
//                 "/js/dbhelper.js",
//                 "/js/restaurant_info.js",
//                 "/index.js",
//                 "/data/restaurants.json",
//                 "/css/styles.css",
//                 "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
//                 'img/1.jpg',
// 				'img/2.jpg',
// 				'img/3.jpg',
// 				'img/4.jpg',
// 				'img/5.jpg',
// 				'img/6.jpg',
// 				'img/7.jpg',
// 				'img/8.jpg',
// 				'img/9.jpg',
// 				'img/10.jpg'
//             ])
//         })
//     )
// })

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.match(event.request).then(function(response){
//           console.log(response)
//         return response || fetch(event.request)
//       })
//     );
//   });