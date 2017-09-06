
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
