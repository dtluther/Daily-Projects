const APIUtil = require('./api_util.js');

class UsersSearch {

  constructor($el) {
    this.$input = $('#find-by-name').val();
    this.$ul = $('.users');
    this.$el = $el;
    this.handleInput();

  }

  handleInput() {
    this.$el.on('input', event => {
      event.preventDefault();
      this.$input = $('#find-by-name').val();
      console.log(this.$input);
      APIUtil.searchUsers(this.$input, result => {
        console.log(result);
        this.renderResults(result);
      })
    });
  }

  renderResults(result) {
    $('ul.users').empty();
    let $users = result;
    console.log('users', $users);
    $users.forEach( (user, idx) => {
      let $user = $(`<li><a href="/users/${user.id}">${user.username}</a></li>`);
      $('ul.users').append($user);
    });
  }
}

module.exports = UsersSearch;
