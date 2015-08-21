/* global prototype */
var Box = function (game, x, y, velocityX) {
    
    //Phaser.Sprite.call(this, game, x, y, 'box');

    //sprite = game.add.tileSprite(x, y, 50, 50, 'starfield');

    Phaser.TileSprite.call(this, game, x, y, 50, 50, 'box')
    
    this.autoScroll(-100, 0);  

    this.game.physics.arcade.enable(this);

    this.body.collideWorldBounds = true;
    this.body.bounce.set(1);
    this.body.velocity.x = velocityX;
    
};

Box.prototype = Object.create(Phaser.TileSprite.prototype);
Box.prototype.constructor = Box;

module.exports = Box;