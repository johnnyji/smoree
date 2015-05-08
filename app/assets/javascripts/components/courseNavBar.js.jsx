var CreateCoursePage = React.createClass({
  render: function() {
    return (
      <div className="new-course-page-container">
        <div className="new-course-nav-bar">
          <CourseFormController tabs={this.props.tabs} course={this.props.course} />
        </div>
        <div className="course-background-banner"></div>
      </div>
    )
  }
});

var CourseFormController = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array
  },
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
      <SubformInfo course={this.props.course} />,
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

var FormTabManager = React.createClass({
  render: function() {
    var tabs = [];
    var activeTab = this.props.tabs[this.props.activeTabIndex];
    
    for (var i = 0; i < this.props.tabs.length; i++ ) {
      var currentTab = this.props.tabs[i];
      if (currentTab === activeTab) { 
        tabs.push(
          <div className="active" onClick={this.props.onTabClick.bind(this, i)}>
            {this.props.tabs[i]}
          </div>
        )
      } else {
        tabs.push(
          <div onClick={this.props.onTabClick.bind(this, i)}>
            {this.props.tabs[i]}
          </div>
        )
      }
    }
    return <div className="new-course-icons">{tabs}</div>
  }
});

var SubformInfo = React.createClass({
  getInitialState: function() {
    return {
      course_summary: null
    }
  },
  getFormFieldName: function(name) {
    return "course[" + name + "]";
  },
  handleFieldChange: function(fieldId, event) {
    this.setState({ fieldId: event.target.value });
    debugger;
  },
  render: function() {
    var course = this.props.course
    return (
      <div className="new-course-form">
        <h1 className="nav-content-title">Course Info</h1>

        <label className="new-course-label" for="course_title">Course Title</label>
        <input type="text" placeholder="Course Title" id="course_title" onChange={this.handleFieldChange.bind(this, 'course_title')} name={this.getFormFieldName("title")} className="new-course-form-title"></input>
        
        <label className="new-course-label" for="course_summary">Summarization</label>
        <textarea type="text" placeholder="Course Summary" id="course_summary" onChange={this.handleFieldChange.bind(this, 'course_summary')} name={this.getFormFieldName("summary")} className="new-course-form-summary"></textarea>
        
        <label className="new-course-label" for="course_summary">Description</label>
        <textarea placeholder="Course Description" id="course_description" onChange={this.handleFieldChange.bind(this, 'course_description')} name={this.getFormFieldName("description")} className="new-course-form-description"></textarea>
      </div>
    )
  }
});

var SubformDate = React.createClass({
  render: function() {
    return (
      <h1>Hello Data!</h1>
    )
  }
});

var SubformImages = React.createClass({
  render: function() {
    return (
      <h1>Hello Images!</h1>
    )
  }
});

var PageHeader = React.createClass({

});