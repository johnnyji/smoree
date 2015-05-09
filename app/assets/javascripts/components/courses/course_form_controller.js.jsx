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
        course={this.props.course}
        handleTitleChange={this.props.handleTitleChange}
        handleSummaryChange={this.props.handleSummaryChange}
        handleDescriptionChange={this.props.handleDescriptionChange} 
      />,
      <SubformLocation
        country={this.props.country}
        state={this.props.state}
        city={this.props.city}
        address={this.props.address}
        handleLocationSave={this.props.handleLocationSave}
        country={this.props.country}
        state={this.props.state}
        city={this.props.city}
        address={this.props.address}
        handleLocationChange={this.props.handleLocationChange}
      />,
      <SubformDate course={this.props.course} />,
      <SubformImages course={this.props.course} />
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