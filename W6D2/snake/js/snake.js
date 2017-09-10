const Coord = require ('./coord.js');

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
