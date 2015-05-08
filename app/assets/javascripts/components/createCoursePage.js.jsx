var CreateCoursePage = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      courseTitle: "Super Awesome Title",
      courseSummary: null,
      courseDescription: null
    }
  },
  handleTitleChange: function() {
    this.setState({ courseTitle: event.target.value });
  },
  render: function() {
    return (
      <div className="new-course-page-container">
        <div className="new-course-nav-bar">
          <CourseFormController tabs={this.props.tabs} course={this.props.course} courseTitle={this.state.courseTitle} handleTitleChange={this.handleTitleChange} />
        </div>
        
        <div className="course-background-banner">
          <div className="course-title-field">{this.state.courseTitle}</div>
        </div>
      </div>
    )
  }
});