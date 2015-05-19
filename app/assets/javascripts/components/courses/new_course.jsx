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
      slug: this.props.course.slug,
      defaultCourseTitle: "Super Awesome Title",
      defaultCourseSummary: "This is where you would summarize your course!",
      defaultCourseDescription: "This is where you would give a description about how awesome your course was!",
      editingEmail: false,
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
  handleSlugChange: function() {
    this.setState({ slug: event.target.value });
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
  handleEditingEmail: function() {
    if (this.state.editingEmail) {
      this.setState({ editingEmail: false });
    } else {
      this.setState({ editingEmail: true });
    }
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
      slug: this.state.slug,
      welcome_email: this.state.welcomeEmail,
      start_date: this.verifyDate(this.state.startDate),
      end_date: this.verifyDate(this.state.endDate)
    }
    if (this.props.editing) {
      CourseActions.editCourse(this.props.course.id, data, this.handleSubmitSuccess, this.handleSubmitError);  
    } else {
      CourseActions.createCourse(data, this.handleSubmitSuccess, this.handleSubmitError);  
    }
  },
  verifyDate: function(date) {
    if(typeof(date) === "object") {
      return date.format("MMMM Do YYYY").toString();
    } else {
      return date
    }
  },
  handleSubmitSuccess: function(data) {
    window.location.href = "/courses/" + data.course_id;
  },
  handleSubmitError: function(xhr, requestCode, errorThrown) {
    var data = $.parseJSON(xhr.responseText);
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
    return s.courseTitle && s.courseSummary && s.courseDescription && s.startDate && s.endDate && s.latitude && s.longitude && s.welcomeEmail && s.slug
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    return (
      <div className="new-course-page-container">
        {this.state.submitError && <CourseErrors errors={s.errors} handleExitModal={this.handleExitModal}/>}
        {s.editingEmail && <PreviewEmail user={p.user} message={s.welcomeEmail} handleExitModal={this.handleEditingEmail}/>}
        <CourseFormController 
          user={p.user}
          tabs={p.tabs}
          course={p.course}

          slug={s.slug}
          courseTitle={s.courseTitle}
          courseSummary={s.courseSummary}
          courseDescription={s.courseDescription}
          welcomeEmail={s.welcomeEmail}
          
          handleTitleChange={this.handleTitleChange}
          handleSummaryChange={this.handleSummaryChange}
          handleDescriptionChange={this.handleDescriptionChange}
          handleSlugChange={this.handleSlugChange}
          
          handleLocationChange={this.handleLocationChange}
          handleDateChange={this.handleDateChange}
          handleImageSave={this.handleImageSave}
          handleWelcomeEmailChange={this.handleWelcomeEmailChange}
          handleEditingEmail={this.handleEditingEmail}
        
          handleFormSubmit={this.handleFormSubmit}
        />
        <Banner
          title={s.courseTitle} 
          imageUrl={s.imageUrl}
        />
        <CourseInfo
          user={p.user} 
          summary={s.courseSummary} 
          description={s.courseDescription} 
          latitude={s.latitude}
          longitude={s.longitude}
          startDate={s.startDate}
          endDate={s.endDate}
          address={s.address}
        />
        {!this.readyToSubmit() && <button className="no-create-course-button">Not finished yet</button>}
        {this.readyToSubmit() && <SubmitButton handleFormSubmit={this.handleFormSubmit}/>}
      </div>
    )
  }
});