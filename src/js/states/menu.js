var Menu = function () {
  this.text = null;
};

module.exports = Menu;

Menu.prototype = {

  create: function () {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.title = this.game.add.text(10, 10, 'Bouncy!', { font: "12px Arial", fill: "#ff0044" });
  },

  update: function () {
    
    if (this.cursors.left.isDown) {
      this.game.state.start("Game");
    }
    else if (this.cursors.right.isDown) {
      this.game.state.start("Game");
    }
  }
};
