const APIUtil = require('./api_util.js');

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
