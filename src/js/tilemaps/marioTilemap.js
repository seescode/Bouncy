var MarioTilemap = function(game) {
    this.map = game.add.tilemap('tilemap');   

    //'Tiles' matches what's in tilesets.name within FirstTileMap.json    
    this.map.addTilesetImage('Tiles');

    //'Tile Layer 1' matches what's in FirstTileMap.json
    this.layer = this.map.createLayer('Tile Layer 1');     
    this.layer.resizeWorld();
    //this.layer.wrap = true;
    
    this.map.createFromTiles(18, null, 'coins', 'Tile Layer 1');
    this.map.setCollisionBetween(4, 5);
    this.map.setCollisionBetween(14, 15);


    return this.layer;
};

MarioTilemap.prototype = Object.create(Phaser.Sprite.prototype);
MarioTilemap.prototype.constructor = MarioTilemap;


MarioTilemap.prototype.update = function() {
  
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


module.exports = MarioTilemap;