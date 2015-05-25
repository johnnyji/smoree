var ManageData = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
    courses: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      activeTabIndex: 0,
      courseTitles: [],
      rangeOfDays: [],
      viewsPerDay: [],
      signupsPerDay: [],
      componentReady: false,
      navReady: false
    };
  },
  componentDidMount: function() {
    if (this.props.courses.length < 1) {
      this.loadNavbar();
      this.loadRangeOfDays();
    }
  },
  loadNavbar: function() {
    var p = this.props;
    var courseTitles = [];
    for (var i = 0; i < p.courses.length; i++) {
      courseTitles.push(p.courses[i].title);
    }
    this.setState({ courseTitles: courseTitles });
  },
  loadRangeOfDays: function() {
    var defaultRangeOfDays = [];
    for (var i = 0; i < 6; i++) {
      var day = moment().subtract(i, "days").format("MMMM Do YYYY");
      defaultRangeOfDays.push(day);
    }
    this.setState({ 
      rangeOfDays: defaultRangeOfDays,
      componentReady: true
    });
  },
  handleChartReady: function() {
    this.setState({ navReady: true });
  },  
  handleTabClicked: function(tabIndex) {
    this.setState({ activeTabIndex: tabIndex });
  },
  render: function() {
    var p = this.props;
    var s = this.state;

    if (p.courses.length < 1) { return <h1>No Courses Yet</h1> }
    if (!s.componentReady) { return <Spinner /> }
    return (
      <div className="data-container">
        <DataNav
          tabs={s.courseTitles}
          handleClick={this.handleTabClicked}
          activeTabIndex={s.activeTabIndex}
          navReady={s.navReady}
        />
        <DataContent
          courses={p.courses}
          activeTabIndex={s.activeTabIndex}
          rangeOfDays={s.rangeOfDays}
          viewsPerDay={s.viewsPerDay}
          signupsPerDay={s.signupsPerDay}
          chartReady={this.handleChartReady}
        />
      </div>
    );
  }
});