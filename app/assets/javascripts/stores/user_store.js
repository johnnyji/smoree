var UserStore = Reflux.createStore({
  listenables: UserActions,
  createNewCourse: function() {
    window.location.href = "/courses/new";
  }
});