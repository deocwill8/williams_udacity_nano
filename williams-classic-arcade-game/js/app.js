// Enemies our player must avoid
var allEnemies = [];
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x; //horizontal 
    this.y = y; //vertical 
    this.speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //change in x
    dt = dt * this.x

    //change in y 
    dt = dt * this.x
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    constructor() {
        this.sprite = 'images/char-horn-girl.png';
        //initial postions taken from https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
        // this.x = 220;
        // this.y = 440;
        this.step = 101;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = (this.jump * 5) - 20;
        this.x = this.startX
        this.y = this.startY;
       
        //update the position of the Player
        this.update = function(dt) {

            //change in x

             //change in y 
        }

        // handle key inputs to move player sprite
        this.handleInput = function(keyCodeInput) {
           //switch statement taken from  https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
            switch(keyCodeInput) {
                case "left":
                if(this.x > 0){
                    this.x -=this.step;
                }
                break;
                case "up":
                if(this.y > this.jump) {
                    this.y -=this.jump;
                }
                break;
                case "right":
                if(this.x < this.step *4){
                    this.x +=this.step;
                }
                break;
                case "down":
                if(this.y < this.jump * 4){
                    this.y += this.jump;
                }
                break;
            }
        }

        // Draw the player on the screen, required method for game
        this.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy(0,2);
const enemy2 = new Enemy(0,5);
const enemy3 = new Enemy(0,7);
const enemy4 = new Enemy(0,11);
allEnemies.push(enemy1)
// function createEnemies(n) { //number of enemies created
//     var enemies = new Enemy()
//     for (var i = 0; i < n; ++i) {
//         enemies[i] = new Enemy()
//     }
//     return enemies
//   }
// Place the player object in a variable called player
var player = new Player();

var playerCollision = function() {

}

var resetPlayerOnCollistion = function() {

}

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