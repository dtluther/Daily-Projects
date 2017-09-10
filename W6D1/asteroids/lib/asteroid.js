const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

const Asteroid = function Asteroid(options){

  MovingObject.call(this, { pos: options.pos });
  this.vel = Util.randomVec(1);
  this.color = 'blue';
  this.radius = 5;
  console.log(this.pos);
  // console.log(this.pos[0]);
  // console.log(typeof this.pos[0]);
  // console.log(typeof this.pos[1]);
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
