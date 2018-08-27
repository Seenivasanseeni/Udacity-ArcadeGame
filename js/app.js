// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.v=100;
    this.x=randomRange(0,width);
    this.y=randomRange(blockheight,height-blockheight); 
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x+=dt*this.v;
    if(this.x>width){
        this.x=0;
        this.y=randomRange(0,height/2);
    }
    if(player.ifCollided(this)){
        player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player= function(){
    this.sprite="images/char-boy.png";
    this.x=blockwidth*2;
    this.y=blockheight*5;
}

Player.prototype.update=function(){

}

var inRange=function(i,start,end){
    return i>=start && i<=end;
}

Player.prototype.ifCollided=function(enemy){
    return inRange(this.x,enemy.x-blockwidth/2,enemy.x+blockwidth/2) && inRange(this.y,enemy.y-blockheight/2,enemy.y+blockheight/2);    
}

Player.prototype.reset=function(){
    this.x=blockwidth*2;
    this.y=blockheight*5;
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);    
}

Player.prototype.handleInput=function(keyCode){
    switch(keyCode){
        case "left": //left
                this.x=Math.max(0,this.x-blockwidth); 
                break;
        case "up":  //up
            this.y=Math.max(0,this.y-blockheight);    
            break;
        case "right": 
                this.x=Math.min(width,this.x+blockwidth); 
                //right
                break;
        case "down":
            this.y=Math.min(height  ,this.y+blockheight);
                //down 
            break;
    }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies=[];

for (let i = 0; i < 5; i++) {
   allEnemies.push(new Enemy());
}

var player=new Player();

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
