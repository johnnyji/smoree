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
    // when the tab is clicked and the component updates, the componentReady state is set to false. The idea is to set it to false and then true again so the data content component can rerender with the new prop activeTabIndex set by this function...
    // However, I must make an AJAX call in order for this to work?
    // How can I just have the DataContent component re-mount when the state of the activeTabIndex on this component changes, that way, the DataContent component can redo it's AJAX call and grab the correct data for it's graph.
    this.setState({ activeTabIndex: tabIndex });
    this.setState({ componentReady: false });
    this.loadCourseData();
  },
  loadCourseData: function() {
    // Why do I even need this AJAX call here?
    CourseActions.loadCourseData(
      this.props.courses[this.state.activeTabIndex].id,
      this.state.rangeOfDays,
      this.handleLoadSuccess,
      this.handleLoadError
    );
  },
  handleLoadSuccess: function(data) {
    // This is simply so I can reset the state of componentReady to true and have the DataContent component rerender, the rest of this code is arbitrary
    this.setState({
      viewsPerDay: JSON.parse(data.views),
      signupsPerDay: JSON.parse(data.signups),
      componentReady: true
    });
  },  
  handleLoadError: function(xhr) {
    debugger;
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    if (!s.componentReady) {
      return <Spinner /> 
    } else {
      return (
        <div className="data-container">
          <DataNav 
            tabs={s.courseTitles}
            handleClick={this.handleTabClicked}
            activeTabIndex={p.activeTabIndex}
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
  }
});