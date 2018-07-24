// Enemies our player must avoid
var allEnemies = [];
const canvasWidth = 505;
const canvasHeight = 606; 
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x; //horizontal 
    this.y = y + 55; //vertical 
    this.speed = speed;

    // this.step = 101;
    // this.boundary = this.step * 5;
    // this.resetPos = -this.step;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
   this.x = this.x + (this.speed * dt);
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    constructor(x, y) {
        this.sprite = 'images/char-horn-girl.png';
        //initial postions taken from https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
        // this.step = 101;
        // this.jump = 83;
        // this.startX = this.step * 2;
        // this.startY = (this.jump * 5) - 20;
        // this.x = this.startX
        // this.y = this.startY;

        this.x = x;
        this.y = y;
       
        //update the position of the Player
        this.update = function(dt) {
            //call collision function here to update the players position 
            // reset player's postion when player makes it to the water
            // if(this.y == 151){
            //     this.x = 202;
            //     this.y = 400;
            // }
        }

        // handle key inputs to move player sprite
        this.handleInput = function(keyCodeInput) {
            //console.log( "x equals " + this.x + "," + "y equals " + this.y);
            //console.log("key press hit " + keyCodeInput);
            if(keyCodeInput === 'left' && this.x > 0) {
                console.log("left step " + this.x);
                this.x = this.x - 101;
            } 

            if(keyCodeInput == 'up' && this.y > 68){
                console.log("up step " + this.y);
                this.y = this.y - 83;
            } 
            
            if(keyCodeInput === 'right' && this.x <= 303){ 
                console.log("right step " + this.x);
                this.x = this.x + 101;
            } 
            
            if (keyCodeInput == 'down' && this.y < 400) {
                console.log("down step " + this.y);
                this.y = this.y + 83;
            }
        }

        // Draw the player on the screen, required method for game
        this.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    }
}
// Now instantiate your objects.
const enemy1 = new Enemy(0,0,150);
const enemy2 = new Enemy(0,83,200);
const enemy3 = new Enemy(0,166,300);
const enemy4 = new Enemy(0,249,350);
const arrOfEnemyBugs = [enemy1, enemy2, enemy3, enemy4];
// Place all enemy objects in an array called allEnemies
arrOfEnemyBugs.forEach((enemyBug) => {
    allEnemies.push(enemyBug)
})
//console.log(allEnemies)
// Place the player object in a variable called player
var player = new Player(202,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});




// var Player = function() {
//     this.update = function() {
//     }
//     this.render = function() {
//         ctx.drawImage(Resources.get(this.sprite));
//     }
//     this.handleInput = function() {

//     }
//     this.sprite = 'images/char-cat-girl.png';
// };