// document.getElementById("header").innerText = header;
// listOfLinks.addEventListener('click', getChildrenOfList);

//imageClicked = function() {
//         counter++
//         //TODO figure out how to reference the name of the picture as well 
//         counterText.innerText = `The picture, ${pictureTextHeader.innerText},  has been clicked ${counter} times.`;
//         console.log(counter);
// }

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
        getImageNames: function() {
                console.log(model.listOfCats);
                return model.listOfCats
        },
        //increase cat count
        updateCount: function(catName) {
                catName++
        },
        //change the model/view
        notifyView: function() {

        }
}

let view = {
        init: function(){
        //wrap in init function
        this.header = `List of Cats`;
        this.listOfLinks = document.getElementById("listOfLinks")
        this.pictureContainer = document.getElementById('pictureContainer')
        this.pictureTextHeader = document.getElementById('pictureTextHeader')
        this.img = document.getElementById('picture')
        this.counterText = document.getElementById('counterText')
        },

        renderListOfNames: function(){
                octopus.getImageNames().forEach(function(name){
                        var li = document.createElement('li');
                        listOfLinks.appendChild(li);
                        li.id = name.catName;
                        li.innerText += name.catName;
                })

        },

        //change current cat
        updateImageArea: function(){

        }

        //pictureContainer.innerHTML = "",
        // pictureTextHeader.innerText = "Cat 5";
        // img.src = 'images/cat_5.jpg';
        // pictureContainer.appendChild(pictureTextHeader);
        // pictureContainer.appendChild(img);
        // pictureContainer.appendChild(counterText);
        // counterText.innerText = `The picture, ${pictureTextHeader.innerText}, has been clicked ${counter} times.`;
}
view.renderListOfNames();