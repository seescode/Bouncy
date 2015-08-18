var Qumark = function(game, x, y, cursors) {
  this.cursors = cursors;
  Phaser.Sprite.call(this, game, x, y, 'spriteSheet');
    
  this.animations.add('left', [12,13], 10, true);
  this.animations.add('right', [4,5], 10, true);
  
  this.animations.play('left');

  this.game.physics.arcade.enable(this);

  this.body.collideWorldBounds = true;
  this.body.bounce.set(1);
};

Qumark.prototype = Object.create(Phaser.Sprite.prototype);
Qumark.prototype.constructor = Qumark;


Qumark.prototype.update = function() {
  
  // check to see if our angle is less than 90
  // if it is rotate the bird towards the ground by 2.5 degrees
    
  if (this.cursors.left.isDown) {
    this.body.velocity.x = -200;
    this.animations.play('left');
  }
  else if (this.cursors.right.isDown) {
    this.body.velocity.x = 200;
    this.animations.play('right');
  }
  
};


module.exports = Qumark;