const View = require('./ttt-view.js');
const Game = require('../tic-tac-toe_node_soln/game.js');

$( () => {
  // $('.ttt').append('Hi I printed');
  const view = new View(new Game(), $(".ttt"));
});
