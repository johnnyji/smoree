var NewCourse = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      courseTitle: this.props.course.title,
      courseSummary: this.props.course.summary,
      courseDescription: this.props.course.description,
      imageUrl: this.props.course.image_url,
      latitude: this.props.course.latitude,
      address: this.props.course.address,
      longitude: this.props.course.longitude,
      startDate: this.props.course.start_date,
      endDate: this.props.course.end_date,
      welcomeEmail: this.props.course.welcome_email,
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
    if (userInput === defaultState) { return "" };
    return userInput;
  },
  handleLocationChange: function(coordinates, fullAddress) {
    this.setState({
      latitude: coordinates[0],
      longitude: coordinates[1],
      address: fullAddress
    });
  },
  handleDateChange: function(start, end) {
    this.setState({
      startDate: start,
      endDate: end
    });
  },
  handleImageSave: function(image) {
    this.setState({ imageUrl: image });
  },
  handleWelcomeEmailChange: function(email) {
    this.setState({ welcomeEmail: email });
  },
  handleFormSubmit: function() {
    var self = this;
    var data = {
      title: self.verifyUserInput(self.state.courseTitle, self.state.defaultCourseTitle),
      summary: self.verifyUserInput(self.state.courseSummary, self.state.defaultCourseSummary),
      description: self.verifyUserInput(self.state.courseDescription, self.state.defaultCourseDescription),
      location: this.state.address,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      image_url: this.state.imageUrl,
      welcome_email: this.state.welcomeEmail,
      start_date: this.state.startDate,
      end_date: this.state.endDate
    }
    if (this.props.editing) {
      debugger;
      CourseActions.editCourse(this.props.course.id, data, this.handleSubmitSuccess, this.handleSubmitError);  
    } else {
      debugger;
      CourseActions.createCourse(data, this.handleSubmitSuccess, this.handleSubmitError);  
    }
  },
  handleSubmitSuccess: function(data) {
    window.location.href = "/courses/" + data.course_id;
  },
  handleSubmitError: function(XHR, requestCode, errorThrown) {
    debugger;
    var data = $.parseJSON(XHR.responseText);
    this.setState({
      submitError: true,
      errors: data.errors
    });
  },
  handleExitModal: function() {
    this.setState({ submitError: false });
  },
  readyToSubmit: function() {
    var s = this.state;
    return s.courseTitle && s.courseSummary && s.courseDescription && s.startDate && s.endDate && s.latitude && s.longitude && s.welcomeEmail
  },
  render: function() {
    return (
      <div className="new-course-page-container">
        {this.state.submitError && <CourseErrors errors={this.state.errors} handleExitModal={this.handleExitModal}/>}
        <CourseFormController 
          tabs={this.props.tabs}
          course={this.props.course}

          courseTitle={this.state.courseTitle}
          courseSummary={this.state.courseSummary}
          courseDescription={this.state.courseDescription}
          
          handleTitleChange={this.handleTitleChange}
          handleSummaryChange={this.handleSummaryChange}
          handleDescriptionChange={this.handleDescriptionChange}
          
          handleLocationChange={this.handleLocationChange}
          handleDateChange={this.handleDateChange}
          handleImageSave={this.handleImageSave}
          handleWelcomeEmailChange={this.handleWelcomeEmailChange}
        
          handleFormSubmit={this.handleFormSubmit}
        />
        <Banner title={this.state.courseTitle} imageUrl={this.state.imageUrl}/>
        <CourseInfo 
          summary={this.state.courseSummary} 
          description={this.state.courseDescription} 
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          address={this.state.address}
        />
        {!this.readyToSubmit() && <button className="no-create-course-button">Not finished yet</button>}
        {this.readyToSubmit() && <SubmitButton handleFormSubmit={this.handleFormSubmit}/>}
      </div>
    )
  }
});