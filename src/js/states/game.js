var Player = require('../entities/player');

var Game = function () {
  this.testentity = null;
};

module.exports = Game;

Game.prototype = {

  create: function () {

    this.map = this.game.add.tilemap('tilemap');
    

    //'Tiles' matches what's in tilesets.name within FirstTileMap.json    
    this.map.addTilesetImage('Tiles');


    //'Tile Layer 1' matches what's in FirstTileMap.json
    this.layer = this.map.createLayer('Tile Layer 1');     
    this.layer.resizeWorld();
    //this.layer.wrap = true;
    

    this.text = this.game.add.text(10, 10, '0 POINTS', { font: "12px Arial", fill: "#ff0044" });

    this.box = this.game.add.sprite(750, 150, 'box');
    
    this.qumark = this.game.add.sprite(100, 100, 'spriteSheet');
    
    this.qumark.animations.add('left', [12,13], 10, true);
    this.qumark.animations.add('right', [4,5], 10, true);
    
    this.qumark.animations.play('left');

    this.game.physics.arcade.enable(this.box);
    this.game.physics.arcade.enable(this.qumark);
    
    this.game.physics.arcade.gravity.set(0, 500);
    this.game.camera.follow(this.qumark);


    this.box.body.collideWorldBounds = true;
    this.qumark.body.collideWorldBounds = true;

    this.box.body.bounce.set(1);
    this.qumark.body.bounce.set(1);

    this.box.body.velocity.x = -150;
    
    //this says make tile 4,5,14,15 be collidable
    //Note that the texture map starts from index 1.
    this.map.setCollisionBetween(4, 5);
    this.map.setCollisionBetween(14, 15);
    
    var killCoin = function(player, coin) {
      //this.map.replace(1, 18, 1, 1);
      //coin.index = 1;
      coin.copy(this.map.getTile(1, 1));
    };

    this.map.setTileIndexCallback(18, killCoin, this); 

    this.cursors = this.game.input.keyboard.createCursorKeys();
  },

  update: function () {
    var me = this; //TODO make more elegant solution
    
    this.game.physics.arcade.collide(this.qumark, this.layer);
    
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
