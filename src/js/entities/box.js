/* global prototype */
var Box = function (game, x, y, velocityX, group) {
    var box = group.create(x, y, 'box');
    box.body.collideWorldBounds = true;
    box.body.bounce.set(1);
    box.body.velocity.x = velocityX;
};

Box.prototype = Object.create(Phaser.Sprite.prototype);
Box.prototype.constructor = Box;

module.exports = Box;