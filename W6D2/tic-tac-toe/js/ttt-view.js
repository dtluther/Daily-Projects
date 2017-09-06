class View {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();


  }

  bindEvents() {
    $('.square').on('click', event => {
      const $currentTarget = $(event.currentTarget);
      // alert($currentTarget.data("pos"));
      this.makeMove($currentTarget);
    });
  }

  makeMove($square) {
    if ($square.hasClass("shown")) {
      alert("Invalid Move!");
    } else {

      $square.addClass("shown");
      $square.css('background-color', 'white');
      $square.text(this.game.currentPlayer);
      if (this.game.currentPlayer === 'X') {
        $square.css("color", "#00bcd4");
      } else {
        $square.css("color", "#fff179");
      }


      this.game.playMove($square.data("pos"));

      if (this.game.isOver()) {
        setTimeout(() => {
          alert(`Congratulations, Player ${this.game.winner()}!`);
      }, 500);
    }
  }
}

  setupBoard() {
    const $ul = $("<ul class='row'></ul>");
    this.$el.append($ul);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let pos = [i, j];
        let $li = $(`<li class='square'></li>`);
        $li.data("pos", pos);
        $ul.append($li);

      }
    }

  }




}

module.exports = View;
