if(navigator.serviceWorker){
    navigator.serviceWorker.register('index.js').then(function(reg){
        console.log(reg);
        console.log("Im registered");
    }).catch(function(err){
        console.log(err);
        console.log("not registered");
    })
}
