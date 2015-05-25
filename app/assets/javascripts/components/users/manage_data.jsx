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
      componentReady: false
    };
  },
  componentDidMount: function() {
    this.loadNavbar();
    this.loadRangeOfDays();
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
  handleTabClicked: function(tabIndex) {
    this.setState({ activeTabIndex: tabIndex });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    if (!s.componentReady) { return <Spinner /> }
    return (
      <div className="data-container">
        <DataNav 
          tabs={s.courseTitles}
          handleClick={this.handleTabClicked}
          activeTabIndex={s.activeTabIndex}
        />
        <DataContent
          courses={p.courses}
          activeTabIndex={s.activeTabIndex}
          rangeOfDays={s.rangeOfDays}
          viewsPerDay={s.viewsPerDay}
          signupsPerDay={s.signupsPerDay}
        />
      </div>
    );
  }
});