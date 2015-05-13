var SignupForm = React.createClass({
  getInitialState: function() {
    return  {
      submitted: false,
      firstName: null
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
    // add function to submit the form info and create a student with it
    CourseActions.addStudent(data, this.handleAddStudentSuccess, this.handleAddStudentError);
  },
  handleAddStudentSuccess: function(data) {
    this.setState({ 
      submitted: true,
      firstName: data.first_name
    });
  },
  handleAddStudentError: function(XHR) {

  },
  render: function() {
    var s = this.state
    return (
      <div>
        <div className="user-signup-form"> 
          <h1 className="signup-form-title">Sign Up Here!</h1>
          {s.submitted && <SuccessMessageBox message={"Thanks " + s.firstName + "!"} />}
          <br/>
          <input type="text" className="user-signup-name-field" placeholder="First Name" id="student-first-name"></input><br></br>
          <input type="text" className="user-signup-name-field" placeholder="Last Name" id="student-last-name"></input><br></br>
          <input type="email" className="user-signup-email-field" placeholder="Email" id="student-email"></input><br></br>
          <textarea className="user-signup-comment-field" placeholder="Tell the instructor something!" id="student-description"></textarea>
          {this.props.live && <button className="user-signup-submit-button" onClick={this.handleFormSubmission}>Register!</button> }
          {!this.props.live && <button className="no-user-signup-submit-button" disabled>Demo Purpose Only</button>}
        </div>
      </div>
    );
  }

});