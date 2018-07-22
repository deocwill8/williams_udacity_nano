/*
 * Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
const deckOfCards = document.getElementById("deck");
const playingCards = document.getElementsByClassName("card"); 
//idea from https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
const cards = Array.from(playingCards); //need to convert html collection to an array for the shuffle function to work
let compareCardArr = [];
let cardIcons = [
    "fa fa-diamond",
    "fa fa-paper-plane-o",
    "fa fa-anchor",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-leaf",
    "fa fa-bicycle",
    "fa fa-bomb",
    "fa fa-diamond",
    "fa fa-paper-plane-o",
    "fa fa-anchor",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-leaf",
    "fa fa-bicycle",
    "fa fa-bomb"
    ];
let winningCardArr = [];    
let gameStillGoing = 0; 
let playersMoves = 0;
let seconds = 0;
let minutes = 0;
let startTime;
let starsLost = 0;

let playAgainBtn = document.getElementById('playAgain');
let restartBtn = document.getElementById('restartBtn');

let modal = document.getElementById('modal');
let closeModal = document.getElementById('exit');

let firstStar = document.getElementById('starOne');
let secondStar = document.getElementById('starTwo');
let thirdStar = document.getElementById('starThree');

let timeTaken = document.getElementById('congratsTimes');
let starsTaken = document.getElementById('congratsRating');


 window.onload = function(){
     mixCardElements();
 }

function mixCardElements(){
    //clear ul element
    deckOfCards.innerHTML = "";
    //shuffle icon array
    shuffle(cardIcons);
    //loop through card array, append li element with inner icon string to ul element.
    cardIcons.forEach(function(singleIcon){
        let newCard = document.createElement('li'); 
        newCard.setAttribute("class", "card");

        let shuffledIcon = document.createElement('i');
        shuffledIcon.setAttribute("class", singleIcon);

        newCard.appendChild(shuffledIcon);
        deckOfCards.appendChild(newCard);
    }) 
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

deckOfCards.addEventListener('click', showCard);

//flip the card open if conditions are met
function showCard() {
    let targetCard = event.target;
    // first check to see if a card was clicked
    if(targetCard.tagName === "LI"){

        //start the timer once the player attempts a match;
        gameStillGoing++; 
        if(gameStillGoing === 1 ){
            startTime = setInterval(startClock, 1000);
        }

        if(!targetCard.classList.contains('open') && 
        !targetCard.classList.contains('show') && 
        !targetCard.classList.contains('match')) {
            targetCard.classList.add('open','show');
            compareCardArr.push(targetCard);
            compareCards();
        }
    } else {
        console.log("You've clicked outside the square");
    }
}

/*
idea for matching two cards at a time 
came from: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
*/

function compareCards() {
    //only start checking for matches if there are 2 cards in the comparison array 
    if (compareCardArr.length == 2){
        // console.log("I have something to compare!");

        //increment the number of moves the player has made and check for moves 
        playersMoves++;
        document.getElementById("playersMoves").textContent = playersMoves;
        starRating();

        //go through compareCardArr array to check for matches
            //check if the two are the same
            if(compareCardArr[0].children[0].classList[1] == compareCardArr[1].children[0].classList[1]){
                console.log("we have a match");
                
                // console.log(compareCardArr[0]);
                // console.log(compareCardArr[1]);

                compareCardArr[0].classList.remove('open');
                compareCardArr[1].classList.remove('open');   

                compareCardArr[0].classList.add('match', 'animated', 'bounce');
                compareCardArr[1].classList.add('match', 'animated', 'bounce');    
                
                //TODO: put this in its own function 
                //put the name of the winning set of cards in an arrary
                winningCardArr.push(compareCardArr[1].children[0].classList[1]);
                if(winningCardArr.length == 8){
                    console.log("game has been won");

                    //stop the timer restart the clock
                    clearInterval(startTime);
                    startTime = 0;

                    //show modal
                    modalInformation();
                    modal.style.display = "block";

                    //empty winning arrary
                    winningCardArr = [];
                }
                // console.log(winningCardArr);
                
                compareCardArr = []; //empty the array
            
            //if they are not the same empty the array and flip the cards      
            } else {
                console.log("we dont have a match");

                // TODO add where I got the timeout function from 
                hideCard();
            }
        }
    }

function hideCard(){
    //flip the cards if they are not a match 
    setTimeout(function(){
        compareCardArr[0].classList.remove('open','show');
        compareCardArr[1].classList.remove('open','show');
        compareCardArr = [];
    },500)
    // console.log(compareCardArr[0].children[0].classList[1]);
    // console.log(compareCardArr[1].children[0].classList[1]);
}

closeModal.addEventListener('click', closePopUp);

function closePopUp(){
    modal.style.display = "none";
}

function modalInformation() {
    starsTaken.textContent =  `You lost ${starsLost} stars.`;
    timeTaken.textContent = `It took you ${minutes} minutes and ${seconds} seconds.`;
}

function startClock() {
        seconds++;
        if (seconds == 60){
            seconds = 0;
            minutes++
        }
    document.getElementById("time_left").textContent = `${minutes} : ${seconds}`;   
}

/*
idea for using a variable to hold the number of stars for a rating came 
from a google search on https://codepen.io/JoannaQ/pen/MVGPgP?editors=1010

line 157
*/

function starRating() {
    console.log(playersMoves);
    if (playersMoves < 10){
        starsLost = 0;
    } else if (playersMoves > 10 && playersMoves < 20) {
        firstStar.style.display = "none";
        starsLost = 1;
    } else if (playersMoves > 20 && playersMoves < 30) {
        secondStar.style.display = "none";
        starsLost = 2;
    } else if(playersMoves > 30) {
        thirdStar.style.display = "none";
        starsLost = 3;
    }
}

playAgainBtn.addEventListener('click', playAgain);

function playAgain() {
    closePopUp();
    restart();
}

restartBtn.addEventListener('click', restart);

function restart() {
    //start the time back at 0:0
    document.getElementById("time_left").textContent = "0 : 0";  
    gameStillGoing = 0; 
    seconds = 0;
    minutes = 0;

    //reset the number of moves
    playersMoves = 0;
    document.getElementById("playersMoves").textContent = playersMoves;

    //place all the stars back 
    starsLost = 0;
    firstStar.style.display = "inline";
    thirdStar.style.display = "inline";
    secondStar.style.display = "inline";

    //handles clearing the classes an re shuffling the deck
    mixCardElements();
}
