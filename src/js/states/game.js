var Qumark = require('../entities/qumark');

var Game = function () {
  this.testentity = null;
};

module.exports = Game;

Game.prototype = {

  create: function () {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    
    this.map = this.game.add.tilemap('tilemap');
    

    //'Tiles' matches what's in tilesets.name within FirstTileMap.json    
    this.map.addTilesetImage('Tiles');


    //'Tile Layer 1' matches what's in FirstTileMap.json
    this.layer = this.map.createLayer('Tile Layer 1');     
    this.layer.resizeWorld();
    //this.layer.wrap = true;
    
    this.map.createFromTiles(18, null, 'coins', 'Tile Layer 1');
    
    
    

    this.text = this.game.add.text(10, 10, '0 POINTS', { font: "12px Arial", fill: "#ff0044" });


    this.boxes = this.game.add.group();
    this.boxes.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    

    //this.box = this.game.add.sprite(750, 150, 'box');
    var box = this.boxes.create(750, 150, 'box');
    box.name = 'a';
    box.body.collideWorldBounds = true;
    box.body.bounce.set(1);
    box.body.velocity.x = -300;
    
    box = this.boxes.create(500, 150, 'box');
    box.name = 'b';
    box.body.collideWorldBounds = true;
    box.body.bounce.set(1);
    box.body.velocity.x = -150;

    box = this.boxes.create(300, 150, 'box');
    box.name = 'c';
    box.body.collideWorldBounds = true;
    box.body.bounce.set(1);
    box.body.velocity.x = -150;
    
    

    //this.game.physics.arcade.enable(this.box);
    
    this.game.physics.arcade.gravity.set(0, 500);
    
    
    this.qumark = new Qumark(this.game, 100, 100, this.cursors);
    this.game.camera.follow(this.qumark);
    this.game.add.existing(this.qumark);


    //this.box.body.collideWorldBounds = true;

    //this.box.body.bounce.set(1);

    //this.box.body.velocity.x = -150;
    
    //this says make tile 4,5,14,15 be collidable
    //Note that the texture map starts from index 1.
    this.map.setCollisionBetween(4, 5);
    this.map.setCollisionBetween(14, 15);
    
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
    });

  }

};
