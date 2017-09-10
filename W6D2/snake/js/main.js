const Snake = require("./snake.js");
const Board = require("./board.js");
const Coord = require("./coord.js");
const View = require("./view.js");
const Game = require("./game.js");


$( () => {
  // $('.ttt').append('Hi I printed');
  const view = new View(new Game(), $(".snake"));
});
