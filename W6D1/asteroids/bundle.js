/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById('game-canvas');
  const ctx = canvasEl.getContext("2d");

  const asteroids = new GameView(ctx);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 500);
  ctx.fill(asteroids.start());
});


// document.addEventListener("DOMContentLoaded", function(){
//   const canvasEl = document.getElementById("game-canvas");
//   canvasEl.width = 500;
//   canvasEl.height = 500;
//
//   const ctx = canvasEl.getContext("2d");
//   ctx.fillStyle = "purple";
//   ctx.fillRect(0, 0, 500, 500);
//
//   ctx.beginPath();
//   ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
//   ctx.strokeStyle = 'yellow';
//   ctx.lineWidth = 5;
//   ctx.stroke();
//   ctx.fillStyle = 'white';
//   ctx.fill();
//
//   const asteroids = new GameView(ctx);
//   asteroids.start();
// });


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(2);

const GameView = function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;

};

GameView.prototype.start = function () {
  setInterval(this.game.moveObjects.bind(this.game), 20);
  setInterval(this.game.draw.bind(this.game, this.ctx), 20);
};

module.exports = GameView;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(3);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(4);
const MovingObject = __webpack_require__(5);

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};


module.exports = Util;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const MovingObject = function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
};

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;

  ctx.beginPath();
  ctx.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  );
  // console.log(this.pos[0], this.pos[1], this.radius);
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

// const mo = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );

module.exports = MovingObject;


/***/ })
/******/ ]);