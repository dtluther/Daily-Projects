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

const Snake = __webpack_require__(1);
const Board = __webpack_require__(3);
const Coord = __webpack_require__(2);
const View = __webpack_require__(4);
const Game = __webpack_require__(5);


$( () => {
  // $('.ttt').append('Hi I printed');
  const view = new View(new Game(), $(".snake"));
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Coord = __webpack_require__ (2);

class Snake {

  constructor() {
    this.direction = Snake.DIRS[ Math.floor(Math.random()*Snake.DIRS.length) ];
    this.segments = [[10,10]];
  }

  move(pos) {
    this.coord = new Coord(pos);
    // this.newPos = this.coord.newPos;
    this.head = this.segments[0][0];

    // let newHead = this.coord.plus(this.)
    // this.segments.unshift()
    const newPos = this.coord.plus(this.head);
    return newPos;
  }

  turn(newDir) {
    this.direction = newDir;
  }
}

// Snake.DIRS = ["N", "E", "S", "W"];
Snake.DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

module.exports = Snake;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Coord {

  constructor(newPos) {
    this.newPos = newPos;
  }

  plus(currentPos) {
    let x = currentPos[0][0];
    let y = currentPos[0][1];

    let x2 = this.newPos[0];
    let y2 = this.newPos[1];

    let newHead = [(x + x2), (y + y2)];
    return newHead;
  }

  equals(currentPos) {
    let x = currentPos[0][0];
    let y = currentPos[0][1];

    let x2 = this.newPos[0];
    let y2 = this.newPos[1];

    return (x === x2) && (y === y2);
  }
}

module.exports = Coord;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Board {

  static makeGrid() {
    const grid = [];

    for (let i = 0; i < 20; i++) {
      grid.push([]);
      for (let j = 0; j < 20; j++) {
        grid[i].push([]);
      }
    }
    return grid;
  }



  constructor () {
    this.grid = Board.makeGrid();
    this.snake = [];
    this.apple = [];
  }

}

module.exports = Board;


/***/ }),
/* 4 */
/***/ (function(module, exports) {


class View {
  constructor(game, $el) {
    this.game = game;
    this.size = this.game.board.grid.length;
    this.$el = $el;
    this.setupBoard();
    this.snake = this.game.snake;
    this.placeSnake();
  }

  setupBoard() {
    const $ul = $('<ul class="row"></ul');
    for (let i = 0; i < this.size; i++) {
      this.$el.append($ul);
      for (let j = 0; j < this.size; j++) {
        let pos = [i, j];
        let $li = $('<li class="square"></li>');
        $li.data("pos", pos);
        $ul.append($li);
      }
    }
  }

  placeSnake() {
    let $li = $('<li class="snake"></li>');
    let pos = this.snake.head;
    let $square = $("ul").find(`[data-pos='${pos}']`);
    $square.addClass("snake");

  }
}

module.exports = View;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Snake = __webpack_require__(1);
const Board = __webpack_require__(3);


class Game {
  constructor() {
    this.board = new Board();
    this.snake = new Snake();
  }


}

module.exports = Game;


/***/ })
/******/ ]);