//imageClicked = function() {
//         counter++
//         //TODO figure out how to reference the name of the picture as well 
//         counterText.innerText = `The picture, ${pictureTextHeader.innerText},  has been clicked ${counter} times.`;
//         console.log(counter);
// }
let currentCat; 

let model = {

     listOfCats: [ 
        {catName: "cat1", catCount: 0, imgSrc: 'images/cat_1.jpg'},
        {catName: "cat2", catCount: 0, imgSrc: 'images/cat_2.jpg'},
        {catName: "cat3", catCount: 0, imgSrc: 'images/cat_3.jpg'},
        {catName: "cat4", catCount: 0, imgSrc: 'images/cat_4.jpg'},
        {catName: "cat5", catCount: 0, imgSrc: 'images/cat_5.jpg'}
        ]
}

let octopus = {
        getListOfNames: function() {
                //console.log(model.listOfCats);
                return model.listOfCats;
        },

        //increase cat count
        updateCount: function(catName) {
                catName++
        },

        //change the model/view
        updateImgArea: function(nameOfImage) {
                model.listOfCats.forEach(function(currentName){
                        if(nameOfImage == currentName.catName) {
                                currentCat = currentName;
                                view.renderCurrentCat();
                            }
                })
        },

        // getCurrentCat(clickedCat){
        //         console.log(clickedCat);
        //         return clickedCat;
        // }
        
}

let view = {
        renderListOfNames: function(){
                octopus.getListOfNames().forEach(function(name){
                        let li = document.createElement('li');
                        listOfLinks.appendChild(li);
                        li.id = name.catName;
                        li.innerText += name.catName;


                        li.addEventListener('click', function(catImageName){
                                octopus.updateImgArea(catImageName.srcElement.textContent);
                                console.log(catImageName.srcElement.textContent + " is the current cat")
                        })
                })

        },

        renderCurrentCat: function() {
                currentImage = currentCat;
                listOfLinks = document.getElementById("listOfLinks");
                pictureContainer = document.getElementById('pictureContainer');
                pictureTextHeader = document.getElementById('pictureTextHeader');
                img = document.getElementById('picture');
                counterText = document.getElementById('counterText');

                pictureContainer.innerHTML = "",
                pictureTextHeader.innerText = currentCat.catName;
                img.src = currentCat.imgSrc;
                pictureContainer.appendChild(pictureTextHeader);
                pictureContainer.appendChild(img);
                pictureContainer.appendChild(counterText);
                counterText.innerText = `The picture, ${pictureTextHeader.innerText}, has been clicked`;  

        }
}
view.renderListOfNames();