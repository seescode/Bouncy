var Player = require('../entities/player');

var Game = function () {
  this.testentity = null;
};

module.exports = Game;

Game.prototype = {

  create: function () {
    this.text = this.game.add.text(10, 10, '0 POINTS', { font: "12px Arial", fill: "#ff0044" });

    this.map = this.game.add.tilemap('tilemap');
    this.map.addTilesetImage('tiles', 'tiles');

    this.layer = map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();
    this.layer.wrap = true;


    this.box = this.game.add.sprite(750, 150, 'box');
    //this.qumark = this.game.add.sprite(100, 100, 'qumark');
    
    this.qumark = this.game.add.sprite(100, 100, 'spriteSheet');
    //this.qumark.frame = 0;
    
    this.qumark.animations.add('left', [12,13], 10, true);
    this.qumark.animations.add('right', [4,5], 10, true);
    
    this.qumark.animations.play('left');

    this.game.physics.arcade.enable(this.box);
    this.game.physics.arcade.enable(this.qumark);

    this.game.physics.arcade.gravity.set(0, 500);

    this.box.body.collideWorldBounds = true;
    this.qumark.body.collideWorldBounds = true;

    this.box.body.bounce.set(1);
    this.qumark.body.bounce.set(1);

    this.box.body.velocity.x = -150;

    this.cursors = this.game.input.keyboard.createCursorKeys();
  },

  update: function () {
    var me = this; //TODO make more elegant solution
    
    this.game.physics.arcade.collide(this.qumark, this.box, function () {
      me.game.state.start("GameOver");
    });

    if (this.cursors.left.isDown) {
      this.qumark.body.velocity.x = -200;
      this.qumark.animations.play('left');
    }
    else if (this.cursors.right.isDown) {
      this.qumark.body.velocity.x = 200;
      this.qumark.animations.play('right');
    }
  }

};
