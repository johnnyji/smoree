var ManageCourses = React.createClass({
  getInitialState: function () {
      return {
        newCourseContainer: null    
      } 
  },
  componentDidMount: function () {
    this.setState({ 
      newCourseContainer: <i className="fa fa-plus" onClick={this.handleNewCourseClick}></i> 
    });
  },
  handleNewCourseClick: function() {
    UserActions.createNewCourse(this.props.user.id);
  },  
  render: function() {
    var p = this.props;
    var courses = [this.state.newCourseContainer];

    for (var i = 0; i < p.courses.length + 3; i++) {
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