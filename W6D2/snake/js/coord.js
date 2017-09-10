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
