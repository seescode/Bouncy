'use strict';

var game = new Phaser.Game(800, 640, Phaser.AUTO, 'bouncy-game');

window.Utils = require('./utils');
window.playerState = {
    currentLevel: 'Game'
}

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));
game.state.add('GameOver', require('./states/gameover'));

game.state.start('Boot');
