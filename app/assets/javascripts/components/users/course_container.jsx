var CourseContainer = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      loadNavigation: false 
    }
  },
  formatDate: function(date) {
    return moment(date).format("MMMM Do YYYY");
  },
  handleNavToCourse: function() {
    this.setState({ loadNavigation: true });
    window.location.href = "/courses/" + this.props.course.id;
    // how do I change the entire URL path to point to:
    // slug.smoree.com
  },
  handleEditCourse: function() {
    window.location.href = "/courses/" + this.props.course.id + "/edit";
  },
  handleCourseDelete: function() {
    CourseActions.deleteCourse(this.props.course.id, this.handleCourseDeleteSuccess);
  },
  handleCourseDeleteSuccess: function(data) {
    window.location.reload();
  },
  handleCourseInfoRedirect: function() {
    window.location.href = "/courses/" + this.props.course.id + "/info";
  },
  render: function() {
    var course = this.props.course;
    var s = this.state;
    return (
      <div className="user-dashboard-course-container">
        <img src={course.image_url} onClick={this.handleNavToCourse} ></img>

        <div className="dashboard-course-title">
          {!s.loadNavigation && 
            <div onClick={this.handleNavToCourse}>
              <h1>{course.title}</h1>
              <p>{this.formatDate(course.start_date)} - {this.formatDate(course.end_date)}</p>
            </div>
          }
          {s.loadNavigation && <Spinner color="white"/>}
        </div>

        <div className="dashboard-options">
          <div className="options-nav-left">
            <div className="icon">
              <Clipboard text={course.slug + ".smoree.com"} />
            </div>
            <div className="icon">
              <i className="fa fa-envelope-o nav-option-icons" onClick={this.handleCourseInfoRedirect}></i>
            </div>
          </div>
          <div className="options-nav-right">
            <div className="icon">  
              <i className="fa fa-remove nav-option-icons" onClick={this.handleCourseDelete}></i>
            </div>
            <div className="icon">
              <i className="fa fa-edit nav-option-icons" onClick={this.handleEditCourse}></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
});