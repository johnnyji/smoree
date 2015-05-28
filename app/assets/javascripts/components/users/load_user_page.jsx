var LoadUserPage = React.createClass({
  propTypes: {
    userId: React.PropTypes.number.isRequired
  },
  getDefaultProps: function() {
    return {
      tabs: ["fa-list-ul", "fa-envelope", "fa-history", "fa-line-chart", "fa-cog"],
      quotes: [
        "With great power comes great electricity bill.",
        "Please don't scare me, I poop very easily.",
        "Raisin cookies that look like chocolate chip cookies are the main reason I have trust issues.",
        "Laughter is the best medicine. But if you're laughing for no reason, you probably need medicine.",
        "Sometimes I feel like I need a six months vacation, twice a year.",
        "At night I can't sleep, In the morning I can't wake up. Fantastic.",
        "Knowledge is knowing tomato is a fruit. Wisdom is not putting tomatos in a fruit salad.",
        "Why did kamikaze pilots wear helmets?",
        "If you accidentally ate your tongue, what would it taste like?",
        "Why do people say \"Heads up!\", when you're suppose to duck?",
        "If tomatos are a fruit, does that make ketchup a smoothie?",
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