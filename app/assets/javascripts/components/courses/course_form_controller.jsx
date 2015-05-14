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
    var subforms = [
      <SubformInfo
        title={this.props.courseTitle}
        summary={this.props.courseSummary}
        description={this.props.courseDescription}
        handleTitleChange={this.props.handleTitleChange}
        handleSummaryChange={this.props.handleSummaryChange}
        handleDescriptionChange={this.props.handleDescriptionChange} 
        handleSlugChange={this.props.handleSlugChange}
      />,
      <SubformLocation
        country={this.props.country}
        state={this.props.state}
        city={this.props.city}
        address={this.props.address}
        handleLocationChange={this.props.handleLocationChange}
      />,
      <SubformImageDate 
        course={this.props.course}
        handleDateChange={this.props.handleDateChange}
        handleImageSave={this.props.handleImageSave}
      />,
      <SubformMessage 
        course={this.props.course}
        handleWelcomeEmailChange={this.props.handleWelcomeEmailChange}
      />
    ]
    return (
      <div className="new-course-nav-bar">
        <FormTabManager tabs={this.props.tabs} onTabClick={this.handleTabClick} activeTabIndex={this.state.activeTabIndex} />
        <div className="course-nav-content">
          {subforms[this.state.activeTabIndex]}
        </div>
      </div>
    )
  }
});