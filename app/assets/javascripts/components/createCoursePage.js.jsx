var CreateCoursePage = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      courseTitle: "Super Awesome Title",
      courseSummary: "This is where you would summarize your course!",
      courseDescription: "This is where you would give a description about how awesome your course was!",
      defaultCourseTitle: "Super Awesome Title",
      defaultCourseSummary: "This is where you would summarize your course!",
      defaultCourseDescription: "This is where you would give a description about how awesome your course was!"
    }
  },
  handleTitleChange: function() {
    if (event.target.value === "") {
      this.setState({ courseTitle: this.state.defaultCourseTitle });
    } else {
      this.setState({ courseTitle: event.target.value });
    }
  },
  handleSummaryChange: function() {
    if (event.target.value === "") {
      this.setState({ courseSummary: this.state.defaultCourseSummary });
    } else {
      this.setState({ courseSummary: event.target.value });
    }
  },
  handleDescriptionChange: function() {
    if (event.target.value === "") {
      this.setState({ courseDescription: this.state.defaultCourseDescription });
    } else {
      this.setState({ courseDescription: event.target.value });
    }
  },
  render: function() {
    return (
      <div className="new-course-page-container">
        <div className="new-course-nav-bar">
          <CourseFormController 
            tabs={this.props.tabs} 
            course={this.props.course} 
            courseTitle={this.state.courseTitle} 
            handleTitleChange={this.handleTitleChange}
            handleSummaryChange={this.handleSummaryChange}
            handleDescriptionChange={this.handleDescriptionChange} 
          />
        </div>
        
        <div className="course-background-banner">
          <div className="course-title-field">{this.state.courseTitle}</div>
        </div>
        <div className="course-info-section">
          <h2 className="course-summary-field">{this.state.courseSummary}</h2>
          <p className="course-description-field">{this.state.courseDescription}</p>
        </div>
      </div>
    )
  }
});