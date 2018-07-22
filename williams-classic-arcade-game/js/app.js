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
        this.x = 220;
        this.y = 440;
       
        //update the position of the Player
        this.update = function(dt) {

            //change in x

             //change in y 
        }

        // handle key inputs 
        this.handleInput = function() {

        }

        // Draw the player on the screen, required method for game
        this.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    
        this.sprite = 'images/char-horn-girl.png';
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
//allEnemies = [new Enemy()]
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