var SubformInfo = React.createClass({
  getInitialState: function() {
    return {
      course_summary: null
    }
  },
  getFormFieldName: function(name) {
    return "course[" + name + "]";
  },
  render: function() {
    var course = this.props.course
    return (
      <div className="new-course-form">
        <h1 className="nav-content-title">Course Info</h1>

        <label className="new-course-label" for="course_title">Course Title</label>
        <input type="text" placeholder="Course Title" id="course_title" onChange={this.props.handleTitleChange} name={this.getFormFieldName("title")} className="new-course-form-title"></input>
        
        <label className="new-course-label" for="course_summary">Summarization</label>
        <textarea type="text" placeholder="Course Summary" id="course_summary" onChange={this.props.handleSummaryChange} name={this.getFormFieldName("summary")} className="new-course-form-summary"></textarea>
        
        <label className="new-course-label" for="course_summary">Description</label>
        <textarea placeholder="Course Description" id="course_description" onChange={this.props.handleDescriptionChange} name={this.getFormFieldName("description")} className="new-course-form-description"></textarea>
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