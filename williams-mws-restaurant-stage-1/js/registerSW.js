//register new service worker for caching
//files i need to cache
//index.html
//restaurant.html
//main.js
//restaurant_in.js
//dbhelper.js
//img folder

if(navigator.serviceWorker){
    navigator.serviceWorker.register('index.js').then(function(reg){
        console.log(reg);
        console.log("Im registered");
    }).catch(function(err){
        console.log(err);
        console.log("not registered");
    })
}
