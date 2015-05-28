var LoadUserPage = React.createClass({
  propTypes: {
    userId: React.PropTypes.number.isRequired
  },
  getDefaultProps: function() {
    return {
      tabs: ["fa-list-ul", "fa-envelope", "fa-history", "fa-line-chart", "fa-cog"]
    };
  },
  getInitialState: function() {
    return {
      loaded: false,
      user: null,
      courses: null,
      students: null
    };
  },
  componentDidMount: function() {
    $("header").hide();
    UserActions.loadUser(this.props.userId, this.onLoadUserSuccess);
  },
  onLoadUserSuccess: function(data) {
    $("header").show();
    this.setState({
      user: data.user,
      students: data.students,
      courses: data.courses,
      loaded: true
    });
  },
  render: function() {
    if (this.state.loaded) {
      return (
        <Dashboard
          user={this.state.user}
          courses={this.state.courses}
          students={this.state.students}
          tabs={this.props.tabs}
        />
      );
    } else {
      return <FullPageSpinner />
    }
  }
});