var SignupForm = React.createClass({
  getInitialState: function() {
    return  {
      submitted: false,
      firstName: null,
      error: false
    }
  },
  handleFormSubmission: function() {
    var data = {
      first_name: document.getElementById("student-first-name").value,
      last_name: document.getElementById("student-last-name").value,
      email: document.getElementById("student-email").value,
      intro_message: document.getElementById("student-description").value,
      course_id: this.props.course_id,

    }
    CourseActions.addStudent(data, this.handleAddStudentSuccess, this.handleAddStudentError);
  },
  handleChange: function() {
    this.setState({
      formHeader: "Register Here!",
      submitted: false
    });
  },
  handleAddStudentSuccess: function(data) {
    debugger;
    this.setState({ 
      submitted: true,
      firstName: data.first_name
    });
    document.getElementById("student-first-name").value = "";
    document.getElementById("student-last-name").value = "";
    document.getElementById("student-email").value = "";
    document.getElementById("student-description").value = "";
  },
  handleAddStudentError: function(XHR) {
    debugger;
    var error = JSON.parse(XHR.responseText)[0];
  },
  render: function() {
    var s = this.state
    return (
      <div>
        <div className="user-signup-form"> 
          {s.submitted && <FlashMessage flashType={"flash-success"} message={"Thanks " + s.firstName + "!"}/>}
          <h1 className="signup-form-title">Register Here!</h1>
          <input type="text" className="user-signup-name-field" placeholder="First Name" id="student-first-name" onChange={this.handleChange}></input><br></br>
          <input type="text" className="user-signup-name-field" placeholder="Last Name" id="student-last-name" onChange={this.handleChange}></input><br></br>
          <input type="email" className="user-signup-email-field" placeholder="Email" id="student-email" onChange={this.handleChange}></input><br></br>
          <textarea className="user-signup-comment-field" placeholder="Tell the instructor something!" id="student-description" onChange={this.handleChange}></textarea>
          {this.props.live && <button className="user-signup-submit-button" onClick={this.handleFormSubmission}>Register!</button> }
          {!this.props.live && <button className="no-user-signup-submit-button" disabled>Demo Purpose Only</button>}
        </div>
      </div>
    );
  }

});