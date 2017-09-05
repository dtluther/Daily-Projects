const Asteroid = require('./asteroid.js');

const Game = function Game() {

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 10;

  this.asteroids = [];
  this.addAsteroids();
};

Game.prototype.addAsteroids = function addAsteroids() {
  for (var i = 0; i < 10; i++) {
    let asteroid = new Asteroid({
      pos: this.randomPosition()
    });
    // debugger
    console.log(asteroid);
    this.asteroids.push(asteroid);
  }
};

Game.prototype.randomPosition = function randomPosition() {
  let x = Math.floor(Math.random() * Game.DIM_X);
  let y = Math.floor(Math.random() * Game.DIM_Y);
  return [x, y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(5, 5, 490, 490);
  this.asteroids.forEach((asteroid) => {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach((asteroid) => {
    asteroid.move();
  });
};

module.exports = Game;
