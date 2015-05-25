var DataContent = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired,
    activeTabIndex: React.PropTypes.number.isRequired,
    rangeOfDays: React.PropTypes.array.isRequired,
    viewsPerDay: React.PropTypes.array.isRequired,
    signupsPerDay: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      viewsPerDay: null,
      signupsPerDay: null,
      componentReady: false
    };
  },
  componentDidMount: function() {
    // debugger;
    // if (this.props.viewsPerDay !== null && this.props.signupsPerDay !== null) {
    //   this.setState({ componentReady: true });
    // }
    CourseActions.loadCourseData(
      this.props.courses[this.props.activeTabIndex].id,
      this.props.rangeOfDays,
      this.handleLoadSuccess,
      this.handleLoadError
    );
  },
  handleLoadSuccess: function(data) {
    this.setState({
      viewsPerDay: JSON.parse(data.views),
      signupsPerDay: JSON.parse(data.signups),
      componentReady: true
    });
  },
  handleLoadError: function(data) {

  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var course = p.courses[p.activeTabIndex];

    if (!s.componentReady) return <Spinner />
    return (
      <div className="data-content">
        <h1>{course.title}</h1>
        <DualLineChart 
          labels={p.rangeOfDays} 
          views={s.viewsPerDay} 
          signups={s.signupsPerDay}
        />
      </div>
    );
  }
});