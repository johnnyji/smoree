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
    var forms = [
      <SubformInfo course={this.props.course} courseTitle={this.state.courseTitle} handleTitleChange={this.props.handleTitleChange} />,
      <SubformDate course={this.props.course} />,
      <SubformImages course={this.props.course} />
    ]
    return (
      <div>
        <div className="course-nav-left">
          <FormTabManager tabs={this.props.tabs} onTabClick={this.handleTabClick} activeTabIndex={this.state.activeTabIndex} />
        </div>
        <div className="course-nav-content">
          {forms[this.state.activeTabIndex]}
        </div>
      </div>
    )
  }
});