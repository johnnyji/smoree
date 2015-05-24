var DataContent = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      rangeOfDay: [],
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
    CourseActions.loadCourseData(this.props.course.id, defaultRangeOfDays, this.onLoadSuccess, this.onLoadError)
  },
  onLoadSuccess: function(data) {
    debugger;
  },
  onLoadError: function(xhr, requestCode, error) {
    debugger;
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div>{p.course.title}</div>
    );
  }
});