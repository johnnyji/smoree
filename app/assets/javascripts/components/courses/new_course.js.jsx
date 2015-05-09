var NewCourse = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      courseTitle: "Super Awesome Title",
      courseSummary: "This is where you would summarize your course!",
      courseDescription: "This is where you would give a description about how awesome your course was!",
      latitude: 49.2886,
      longitude: -123.1111,
      country: "Canada",
      state: "BC",
      city: "Vancouver",
      address: "999 Canada Place",
      defaultCourseTitle: "Super Awesome Title",
      defaultCourseSummary: "This is where you would summarize your course!",
      defaultCourseDescription: "This is where you would give a description about how awesome your course was!",
      submitError: false,
      errors: null
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
  verifyUserInput: function(userInput, defaultState) {
    // How can I move this into the store without it returning me a promise?
    if (userInput === defaultState) { return "" };
    return userInput;
  },
  handleLocationChange: function(coordinates) {
    debugger;
    // var latLng = CourseActons.geocodeLocation(this.state.country, this.state.sate, this.state.city, this.state.address);
    // this.setState({
    //   latitude: latLng.latitude,
    //   longitude: latLng.longitude
    // });
  },
  handleFormSubmit: function() {
    var self = this;
    var data = {
      title: self.verifyUserInput(self.state.courseTitle, self.state.defaultCourseTitle),
      summary: self.verifyUserInput(self.state.courseSummary, self.state.defaultCourseSummary),
      description: self.verifyUserInput(self.state.courseDescription, self.state.defaultCourseDescription)
    }
    CourseActions.createCourse(this.props.user_id, data, this.handleSubmitSuccess, this.handleSubmitError);
  },
  handleSubmitSuccess: function(data) {
    window.location.href = "/courses/" + data.course_id;
  },
  handleSubmitError: function(XHR, requestCode, errorThrown) {
    var data = $.parseJSON(XHR.responseText);
    this.setState({
      submitError: true,
      errors: data.errors
    });
  },
  handleExitModal: function() {
    this.setState({ submitError: false });
  },
  render: function() {
    return (
      <div className="new-course-page-container">
        {this.state.submitError && <CourseErrors errors={this.state.errors} handleExitModal={this.handleExitModal}/>}
        <CourseFormController 
          tabs={this.props.tabs} 
          course={this.props.course} 
          courseTitle={this.state.courseTitle}
          handleTitleChange={this.handleTitleChange}
          handleSummaryChange={this.handleSummaryChange}
          handleDescriptionChange={this.handleDescriptionChange}
          handleLocationSave={this.handleLocationSave}
          handleFormSubmit={this.handleFormSubmit}
          country={this.state.country}
          state={this.state.state}
          city={this.state.city}
          address={this.state.address}
          handleLocationChange={this.handleLocatonChange}
        />
        <CourseBanner courseTitle={this.state.courseTitle}/>
        <CourseInfo 
          summary={this.state.courseSummary} 
          description={this.state.courseDescription} 
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <SubmitButton handleFormSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
});