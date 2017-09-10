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

const FollowToggle = __webpack_require__(1)
const APIUtil = __webpack_require__(2);
const UsersSearch = __webpack_require__(3);


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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

class FollowToggle {

  constructor ($el) {
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.$el = $el;
    this.render();
    this.handleClick();

  }

  render (res) {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    }
  }

  handleClick () {
    let that = this;
    this.$el.on('click', (event) => {
      event.preventDefault();
      let ajaxMethod = this.followState === 'unfollowed' ? APIUtil.followUser : APIUtil.unfollowUser;
      ajaxMethod(this.userId).then( (res) => {
        console.log(res);
        that.toggleFollowState();
        that.render(res);
      });
    })
  }

  getRequestType () {
    if (this.followState === "unfollowed") {
      return "post";
    } else {
      return "delete";
    }
  }

  toggleFollowState() {
    if (this.followState === 'unfollowed') {
      this.followState = 'followed';
    } else {
      this.followState = 'unfollowed';
    }
  }


}



module.exports = FollowToggle;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const APIUtil = {
  followUser: id => (
    $.ajax( {
    type: 'post',
    url: `/users/${id}/follow`,
    dataType: 'json'
  })),

  unfollowUser: id => (
    $.ajax( {
    type: 'delete',
    url: `/users/${id}/follow`,
    dataType: 'json'
  })),

  searchUsers: (queryVal, success) => (
    $.ajax( {
      type: 'GET',
      url: '/users/search',
      dataType: 'JSON',
      data: {
        query: queryVal
      },
      success: success
    })
  )
};

module.exports = APIUtil;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map