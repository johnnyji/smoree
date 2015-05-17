var ManageCourses = React.createClass({
  render: function() {
    var p = this.props;
    var courses = [<NewCourseButton />];

    for (var i = 0; i < p.courses.length; i++) {
      var course = p.courses[i];
      courses.push(<CourseContainer course={course} />);
    }
    return (
      <div>
        <div className="user-dashboard-create-course">
          {courses}
        </div>
      </div>
    )
  }
});