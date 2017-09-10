Function.prototype.inherits = function (Superclass) {
  function Surrogate() {}
  Surrogate.prototype = Superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {
}

MovingObject.prototype.space = function() {
  return "I'm in space";
};

function Ship () {}
Ship.inherits(MovingObject);

Ship.prototype.special = () => "Sucks for you asteroid.";

function Asteroid () {}
Asteroid.inherits(MovingObject);


const x = new Ship();
const y = new Asteroid();

console.log(x);
console.log(x.space());
console.log(y.space());
console.log(x.special());
// console.log(y.special());
