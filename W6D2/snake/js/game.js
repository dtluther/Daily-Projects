const Snake = require("./snake.js");
const Board = require("./board.js");


class Game {
  constructor() {
    this.board = new Board();
    this.snake = new Snake();
  }


}

module.exports = Game;
