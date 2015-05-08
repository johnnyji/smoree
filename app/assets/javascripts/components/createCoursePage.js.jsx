var CreateCoursePage = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      course: {
        courseTitle: "Super Awesome Title",
        courseSummary: "This is where you would summarize your course!",
        courseDescription: "This is where you would give a description about how awesome your course was!"
      },
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
          <CourseFormController 
            tabs={this.props.tabs} 
            course={this.props.course} 
            courseTitle={this.state.courseTitle} 
            handleTitleChange={this.handleTitleChange}
            handleSummaryChange={this.handleSummaryChange}
            handleDescriptionChange={this.handleDescriptionChange} 
          />
        <CourseBanner courseTitle={this.state.courseTitle}/>
        <CourseInfo 
          summary={this.state.courseSummary} 
          description={this.state.courseDescription} 
        />
      </div>
    )
  }
});