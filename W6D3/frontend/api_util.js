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
