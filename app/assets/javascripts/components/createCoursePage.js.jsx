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
  handleFormSubmit: function() {
    var self = this;
    $.ajax({
      url: self.props.submitUrl,
      method: "POST",
      data: { course: {
        title: self.state.courseTitle,
        summary: self.state.courseSummary,
        description: self.state.courseDescription
      } },
      success: function(data) {
        window.location.href = "/courses/" + data.course_id;
      },
      error: function() {
        debugger;
      }
    });
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
            handleFormSubmit={this.handleFormSubmit}
          />
        <CourseBanner courseTitle={this.state.courseTitle}/>
        <CourseInfo 
          summary={this.state.courseSummary} 
          description={this.state.courseDescription} 
        />
        <SubmitButton handleFormSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
});