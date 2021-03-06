let model = {
        currentCat: null,
        listOfCats: [ 
                {catName: "cat1", catCount: 0, imgSrc: 'images/cat_1.jpg'},
                {catName: "cat2", catCount: 0, imgSrc: 'images/cat_2.jpg'},
                {catName: "cat3", catCount: 0, imgSrc: 'images/cat_3.jpg'},
                {catName: "cat4", catCount: 0, imgSrc: 'images/cat_4.jpg'},
                {catName: "cat5", catCount: 0, imgSrc: 'images/cat_5.jpg'}
        ]
}

let octopus = {
        start: function() {
                model.currentCat = model.listOfCats[0];
                view.renderListOfNames();
                view.setElementsUp();
        },
        getListOfCats: function() {
                return model.listOfCats;
        },
        getCurrentCat: function(){
                return model.currentCat;
        },
        setCurrentCat: function(catClicked){
                model.listOfCats.forEach(function(catInfo){
                        if(catInfo.catName == catClicked){
                                model.currentCat = catInfo;
                        }
                })
        },
        updateClickCount: function() {
                model.currentCat.catCount++;
                view.renderCurrentCat();
            }
}

let view = {
        renderListOfNames: function(){
                listOfLinks = document.getElementById("listOfLinks");
                octopus.getListOfCats().forEach(function(name){
                        let li = document.createElement('li');
                        listOfLinks.appendChild(li);
                        li.innerText += name.catName;

                        
                        li.addEventListener('click', function(catImageName){
                                octopus.setCurrentCat(catImageName.srcElement.textContent);
                                view.renderCurrentCat();
                        })
                })

        },
        setElementsUp: function(){
                this.pictureContainer = document.getElementById('pictureContainer');
                this.pictureTextHeader = document.getElementById('catName');
                this.catImg = document.getElementById('picture');
                this.counterText = document.getElementById('counterText');
        
                this.catImg.addEventListener('click', function(){
                        console.log("the image has been clicked");
                        octopus.updateClickCount();
                });

                this.renderCurrentCat();
        },
        renderCurrentCat: function() {
                let activeCat = octopus.getCurrentCat();
                this.pictureTextHeader.textContent = activeCat.catName;
                this.catImg.src = activeCat.imgSrc;
                this.counterText.textContent = activeCat.catCount;
        }
}
octopus.start();