//files that need to be cached
"https://maps.googleapis.com/maps-api-v3/api/js/34/10/common.js"
"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
"/img/"
"/js/main.js"
"/js/dbhelper.js"
"/js/restaurant_info.js"
"/index.js"
"/data/restaurants.json"
"/css/styles.css"
"/restaurant.html?id=1"

let versionNumber = "williams-sw-v1"

self.addEventListener("fetch", function(event){
    console.log("Ive been fetched");
})

self.addEventListener("installed", function(event){
    event.waitUntil(
        caches.open(versionNumber).then(function(cache){
            return cache.addAll([
                "/",
                "https://maps.googleapis.com/maps-api-v3/api/js/34/10/common.js",
                "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
                "/js/main.js",
                "/js/dbhelper.js",
                "/js/restaurant_info.js",
                "/index.js",
                "/data/restaurants.json",
                "/css/styles.css",
                "/restaurant.html?id=1"
            ])
        })
    )
})