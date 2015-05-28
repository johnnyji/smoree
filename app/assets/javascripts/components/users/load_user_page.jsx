var LoadUserPage = React.createClass({
  propTypes: {
    userId: React.PropTypes.number.isRequired
  },
  getDefaultProps: function() {
    return {
      tabs: ["fa-list-ul", "fa-envelope", "fa-history", "fa-line-chart", "fa-cog"],
      quotes: [
        "All my life I thought air was free... Until I bought a bag of chips.",
        "3 A.M. phone calls be like \"Hey are you asleep?\"... \"No, I'm skydiving.\"",
        "I won't be impressed with technology until I can download food.",
        "Don't think of yourself as an ugly person, think of yourself a beautiful monkey.",
        "Sometimes I laugh so hard that no noise comes out, so I sit there clapping like a disabled seal."
      ]
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
    var i = Math.floor(Math.random() * this.props.quotes.length);
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
      return <FullPageSpinner quote={this.props.quotes[i]} />
    }
  }
});