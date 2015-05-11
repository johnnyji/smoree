var UserStore = Reflux.createStore({
  listenables: UserActions,
  createNewCourse: function(userId) {
    window.location.href = "/users/" + userId + "/courses/new";
  }
});