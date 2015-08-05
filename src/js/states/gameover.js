var GameOver = function() {
};

module.exports = GameOver;

GameOver.prototype = {

    create:  function () {      
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.title = this.game.add.text(10, 10, 'Game is over try again', { font: "12px Arial", fill: "#ff0044" }); 
    },
    
    update: function() {

        if (this.cursors.left.isDown) {
			this.game.state.start("Game");	
        }
        else if (this.cursors.right.isDown) {
            this.game.state.start("Game");
        }


    }

};
