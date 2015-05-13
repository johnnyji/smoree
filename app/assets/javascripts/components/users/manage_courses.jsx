var ManageCourses = React.createClass({
  getInitialState: function () {
      return {
        newCourseContainer: null    
      } 
  },
  componentDidMount: function () {
    this.setState({ 
      newCourseContainer: (
        <div className="user-dashboard-course-container" onClick={this.handleNewCourseClick} >
          <i className="fa fa-plus"></i>
        </div>
      ) 
    });
  },
  handleNewCourseClick: function() {
    UserActions.createNewCourse();
  },  
  render: function() {
    var p = this.props;
    var courses = [this.state.newCourseContainer];

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