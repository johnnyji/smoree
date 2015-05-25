var NewCourseButton = React.createClass({
  handleNewCourseClick: function() {
    window.location.href = "/courses/new";
  },
  render: function() {
    return (
      <div className="user-dashboard-course-container new-course-container" onClick={this.handleNewCourseClick} >
        <i className="fa fa-plus new-course"></i>
      </div>
    );
  }
});