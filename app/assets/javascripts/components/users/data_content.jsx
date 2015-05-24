var DataContent = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      rangeOfDays: [],
      viewsPerDay: [],
      signupsPerDay: [],
      componentReady: false
    };
  },
  componentWillMount: function() {
    var defaultRangeOfDays = [];
    for (var i = 0; i < 6; i++) {
      var day = moment().subtract(i, "days").format("MMMM Do YYYY");
      defaultRangeOfDays.push(day);
    }
    this.setState({ rangeOfDays: defaultRangeOfDays });
    CourseActions.loadCourseData(this.props.course.id, defaultRangeOfDays, this.onLoadSuccess, this.onLoadError)
  },
  onLoadSuccess: function(data) {
    this.setState({
      viewsPerDay: JSON.parse(data.views),
      signupsPerDay: JSON.parse(data.signups),
      componentReady: true
    });
  },
  onLoadError: function(xhr, requestCode, error) {
    debugger;
  },
  render: function() {
    var p = this.props;
    var s = this.state;

    if (!s.componentReady) { return <Spinner /> }
    return (
      <div>
        <h1>{p.course.title}</h1>
        <BarChart 
          labels={s.rangeOfDays} 
          views={s.viewsPerDay} 
          signups={s.signupsPerDay}
        />
      </div>
    );
  }
});