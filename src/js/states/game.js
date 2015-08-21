var Qumark = require('../entities/qumark');
var Box = require('../entities/box');
var MarioTilemap = require('../tilemaps/marioTilemap');


var Game = function () {
  this.testentity = null;
};

module.exports = Game;

Game.prototype = {

  create: function () {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    
    
    this.layer = new MarioTilemap(this.game);
    
    this.text = this.game.add.text(10, 10, '0 POINTS', { font: "12px Arial", fill: "#ff0044" });


    //Create boxes
    this.boxes = this.game.add.group();
    this.boxes.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    
    this.boxes.add(new Box(this.game, 750, 150, -300));   
    this.boxes.add(new Box(this.game, 500, 150, -150));   
    this.boxes.add(new Box(this.game, 300, 150, -150));   
     
    this.game.physics.arcade.gravity.set(0, 500);
    
    
    this.qumark = new Qumark(this.game, 100, 100, this.cursors);
    this.game.camera.follow(this.qumark);
    this.game.add.existing(this.qumark);


    //this.box.body.collideWorldBounds = true;

    //this.box.body.bounce.set(1);

    //this.box.body.velocity.x = -150;
    
    //this says make tile 4,5,14,15 be collidable
    //Note that the texture map starts from index 1.
    
//     var killCoin = function(player, coin) {
//       //this.map.replace(1, 18, 1, 1);
//       //coin.index = 1;
//       coin.copy(this.map.getTile(1, 1));
//     };
// 
//     this.map.setTileIndexCallback(18, killCoin, this); 
// 
    
  },

  update: function () {
    var me = this; //TODO make more elegant solution
    
    this.game.physics.arcade.collide(this.qumark, this.layer);
    
    this.game.physics.arcade.collide(this.boxes, this.layer);
    
    this.game.physics.arcade.collide(this.qumark, this.boxes, function () {
      me.game.state.start("GameOver");
      
      
      //box.tilePosition.x += 8;
    });

  }

};
