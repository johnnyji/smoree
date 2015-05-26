// populates the different form fields depending on which tab is selected

var CourseFormController = React.createClass({
  getInitialState: function() {
    return {
      activeTabIndex: 0
    };
  },
  handleTabClick: function(indexOfTabClicked) {
    this.setState({ activeTabIndex: indexOfTabClicked });
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    var subforms = [
      <SubformInfo
        slug={p.slug}
        title={p.courseTitle}
        summary={p.courseSummary}
        description={p.courseDescription}
        handleTitleChange={p.handleTitleChange}
        handleSummaryChange={p.handleSummaryChange}
        handleDescriptionChange={p.handleDescriptionChange} 
        handleSlugChange={p.handleSlugChange}
      />,
      <SubformLocation
        country={p.country}
        state={p.state}
        city={p.city}
        address={p.address}
        handleLocationChange={p.handleLocationChange}
      />,
      <SubformImageDate 
        course={p.course}
        handleDateChange={p.handleDateChange}
        handleImageSave={p.handleImageSave}
      />,
      <SubformMessage
        user={p.user}
        course={p.course}
        welcomeEmail={p.welcomeEmail}
        handleWelcomeEmailChange={p.handleWelcomeEmailChange}
        handleEditingEmail={p.handleEditingEmail}
      />
    ]
    return (
      <div className="new-course-nav-bar">
        <FormTabManager tabs={p.tabs} onTabClick={this.handleTabClick} activeTabIndex={this.state.activeTabIndex} />
        <div className="course-nav-content">
          {subforms[this.state.activeTabIndex]}
        </div>
      </div>
    )
  }
});