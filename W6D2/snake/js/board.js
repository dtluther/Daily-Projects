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
