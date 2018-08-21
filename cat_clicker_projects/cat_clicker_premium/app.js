const header = `List of Cats`;
let listOfLinks = document.getElementById("listOfLinks");
let pictureContainer = document.getElementById('pictureContainer');
let pictureTextHeader = document.getElementById('pictureTextHeader');
let img = document.getElementById('picture');
let counter = 0;
let counterText = document.getElementById('counterText');

document.getElementById("header").innerText = header;
listOfLinks.addEventListener('click', getChildrenOfList);



function getChildrenOfList() {
        switch(event.srcElement.id) {
                case "catImageOne":
                        pictureContainer.innerHTML = "";
                        counter = 0
                        pictureTextHeader.innerText = "Cat 1";
                        img.src = 'images/cat_1.jpg';
                        pictureContainer.appendChild(pictureTextHeader);
                        pictureContainer.appendChild(img);
                        pictureContainer.appendChild(counterText);
                        counterText.innerText = `The picture has been clicked ${counter} times.`;
                        break;
                case "catImageTwo":
                        pictureContainer.innerHTML = "";
                        counter = 0
                        pictureTextHeader.innerText = "Cat 2";
                        img.src = 'images/cat_2.jpg';
                        pictureContainer.appendChild(pictureTextHeader);
                        pictureContainer.appendChild(img);
                        pictureContainer.appendChild(counterText);
                        counterText.innerText = `The picture has been clicked ${counter} times.`;
                        break;
                case "catImageThree":
                        pictureContainer.innerHTML = "";
                        counter = 0
                        pictureTextHeader.innerText = "Cat 3";
                        img.src = 'images/cat_3.jpg';
                        pictureContainer.appendChild(pictureTextHeader);
                        pictureContainer.appendChild(img);
                        pictureContainer.appendChild(counterText);
                        counterText.innerText = `The picture has been clicked ${counter} times.`;
                        break;
                case "catImageFour":
                        pictureContainer.innerHTML = "";
                        counter = 0
                        pictureTextHeader.innerText = "Cat 4";
                        img.src = 'images/cat_4.jpg';
                        pictureContainer.appendChild(pictureTextHeader);
                        pictureContainer.appendChild(img);
                        pictureContainer.appendChild(counterText);
                        counterText.innerText = `The picture has been clicked ${counter} times.`;
                        break;
                case "catImageFive":
                        pictureContainer.innerHTML = "";
                        counter = 0
                        pictureTextHeader.innerText = "Cat 5";
                        img.src = 'images/cat_5.jpg';
                        pictureContainer.appendChild(pictureTextHeader);
                        pictureContainer.appendChild(img);
                        pictureContainer.appendChild(counterText);
                        counterText.innerText = `The picture has been clicked ${counter} times.`;
                        break;
                default:
                        console.log("invalid");
        }
}

let imageClicked = function() {
        counter++
        //TODO figure out how to reference the name of the picture as well 
        counterText.innerText = `The picture has been clicked ${counter} times.`;
        console.log(counter);
}