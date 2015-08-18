var AppState = {
  
};

var AppStore = Reflux.createStore({
  init: function() {
    this.state = AppState;
    this.listenToMany(AppActions);
  },
});