var CourseContainer = React.createClass({
  render: function() {
    var course = this.props.course;
    return (
      <div className="user-dashboard-course-container">
        <img src={course.image_url}/>
        <div>{course.title}</div>
      </div>
    )
  }
});