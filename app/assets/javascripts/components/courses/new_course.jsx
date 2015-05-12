var NewCourse = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      courseTitle: "Super Awesome Title",
      courseSummary: "This is where you would summarize your course!",
      courseDescription: "This is where you would give a description about how awesome your course was!",
      imageUrl: null,
      latitude: null,
      address: null,
      longitude: null,
      startDate: null,
      endDate: null,
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
      address: titleize(fullAddress)
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
      start_date: this.state.startDate,
      end_date: this.state.endDate
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
  readyToSubmit: function() {
    var s = this.state;
    return s.courseTitle && s.courseSummary && s.courseDescription && s.startDate && s.endDate && s.latitude && s.longitude
  },
  render: function() {
    return (
      <div className="new-course-page-container">
        {this.state.submitError && <CourseErrors errors={this.state.errors} handleExitModal={this.handleExitModal}/>}
        <CourseFormController 
          tabs={this.props.tabs}

          courseTitle={this.state.courseTitle}
          courseSummary={this.state.courseSummary}
          courseDescription={this.state.courseDescription}
          
          handleTitleChange={this.handleTitleChange}
          handleSummaryChange={this.handleSummaryChange}
          handleDescriptionChange={this.handleDescriptionChange}
          
          handleLocationChange={this.handleLocationChange}
          handleDateChange={this.handleDateChange}
          handleImageSave={this.handleImageSave}
        
          handleFormSubmit={this.handleFormSubmit}
        />
        <Banner title={this.state.courseTitle} imageUrl={this.state.imageUrl}/>
        <CourseInfo 
          summary={this.state.courseSummary} 
          description={this.state.courseDescription} 
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        {!this.readyToSubmit() && <button className="no-create-course-button">Not finished yet</button>}
        {this.readyToSubmit() && <SubmitButton handleFormSubmit={this.handleFormSubmit}/>}
      </div>
    )
  }
});