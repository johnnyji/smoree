var NewCourseButton = React.createClass({
  handleNewCourseClick: function() {
    window.location.href = "/courses/new";
  },
  render: function() {
    return (
      <div className="user-dashboard-course-container" onClick={this.handleNewCourseClick} >
        <i className="fa fa-plus"></i>
      </div>
    );
  }
});