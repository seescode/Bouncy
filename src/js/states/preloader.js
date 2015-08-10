var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
    //this.asset = this.add.sprite(320, 240, 'preloader');
    //this.asset.anchor.setTo(0.5, 0.5);

    //this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    //this.load.setPreloadSprite(this.asset);    
    this.load.image('box', 'assets/box.bmp');
    this.load.image('qumark', 'assets/qumark.bmp');
    
    this.load.spritesheet('spriteSheet', 'assets/sheet_characters.png', 32, 32);
    
    
    this.game.load.tilemap('tilemap', 'assets/FirstTileMap.json', null, Phaser.Tilemap.TILED_JSON);
    
    //'Tiles' matches what's in tilesets.name within FirstTileMap.json
    this.game.load.image('Tiles', 'assets/terrain_atlas.png');
  },

  create: function () {
    console.log('hello'
    );
  },

  update: function () {
      this.game.state.start('Menu');
    
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};
