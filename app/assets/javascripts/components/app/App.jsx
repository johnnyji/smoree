var App = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    currentUser: React.PropTypes.object,
  },
  getInitialState: function() {
    var state = AppStore.getInitialState();
    return {
      currentUser: state.currentUser, 
    };
  },
  componentDidMount: function() {
    this.listenTo(AppActions, this._updateState);
  },
  _updateState: function(state) {
    this.setState({
      currentUser: state.currentUser,
    });
  },
  render: function() {
    return (
      <div></div>
    );
  }
});