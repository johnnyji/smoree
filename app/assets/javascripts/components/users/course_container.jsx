var CourseContainer = React.createClass({
  handleNavToCourse: function() {
    debugger;
    window.location.href = "/courses/" + this.props.course.id;
  },
  handleEditCourse: function() {
    window.location.href = "/courses/" + this.props.course.id + "/edit";
  },
  handleCourseDelete: function() {
    CourseActions.deleteCourse(this.props.course.id, this.handleCourseDeleteSuccess);
  },
  handleCourseDeleteSuccess: function(data) {
    debugger;
    window.location.reload();
  },
  handleCourseInfoRedirect: function() {
    window.location.href = "/courses/" + this.props.course.id + "/info";
  },
  render: function() {
    var course = this.props.course;
    return (
      <div className="user-dashboard-course-container">
        <div className="dashboard-course-wrapper">
          <img src={course.image_url} onClick={this.handleNavToCourse} ></img>
          <h1 className="dashboard-course-title" onClick={this.handleNavToCourse}>{course.title}</h1>
          <div className="dashboard-options">
            <div className="options-nav-left">
              <div className="icon">
                <i className="fa fa-envelope-o" onClick={this.handleCourseInfoRedirect}></i>
              </div>
            </div>
            <div className="options-nav-right">
              <div className="icon">  
                <i className="fa fa-remove" onClick={this.handleCourseDelete}></i>
              </div>
              <div className="icon">
                <i className="fa fa-edit" onClick={this.handleEditCourse}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});