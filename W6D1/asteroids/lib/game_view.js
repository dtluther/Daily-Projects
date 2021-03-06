const Game = require('./game.js');

const GameView = function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;

};

GameView.prototype.start = function () {
  setInterval(this.game.moveObjects.bind(this.game), 20);
  setInterval(this.game.draw.bind(this.game, this.ctx), 20);
};

module.exports = GameView;
