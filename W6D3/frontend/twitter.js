const FollowToggle = require("./follow_toggle.js")
const APIUtil = require('./api_util.js');
const UsersSearch = require('./users_search.js');


$( () => {
  const $followButtons = $('button.follow-toggle');
  $followButtons.each( (ind, el) => {
    new FollowToggle($( el ));
    // console.log(el);
  })
  const $search = $('nav.users-search');
  $search.each( (ind, el) => {
    new UsersSearch($( el ));
  })
});
