let catImage = document.getElementById("catImage");

const cat1 = `Cat Number One`;
const cat2 = `Cat Number Two`;

let counter1 = 0;
let counter2 = 0;

let wasClicked = false;

let cat1CounterText = `The ${cat1} picture has been clicked ${counter1} times.`;
let cat2CounterText = `The ${cat2} picture has been clicked ${counter2} times.`;

document.getElementById("catOne").innerText = cat1;
document.getElementById("catTwo").innerText = cat2;

document.getElementById("cat1CounterText").innerText = cat1CounterText;
document.getElementById("cat2CounterText").innerText = cat2CounterText;

let catOneImageClicked = function() {
        counter1++;
        document.getElementById("cat1CounterText").textContent = `The ${cat1} picture has been clicked ${counter1} times.`;; 
        console.log(counter1);
}

let catTwoImageClicked = function() {
        counter2++
        document.getElementById("cat2CounterText").textContent = `The ${cat2} picture has been clicked ${counter2} times.`; 
        console.log(counter2); 
}