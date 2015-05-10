var SubmitButton = React.createClass({
  render: function() {
    return ( 
      <button className="create-course-button" onClick={this.props.handleFormSubmit}>I'm Done!</button>
    )
  }
});