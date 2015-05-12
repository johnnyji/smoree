var SignupForm = React.createClass({
  handleFormSubmission: function() {
    var firstName = document.getElementById("student-first-name").value;
    var lastName = document.getElementById("student-last-name").value;
    var lastName = document.getElementById("student-email").value;
    var description = document.getElementById("student-description").value;
    debugger;
    // add function to submit the form info and create a student with it
    CourseActions.addStudent();
  },
  render: function() {
    return (
      <div>
        <div className="user-signup-form"> 
          <input className="user-signup-name-field" placeholder="First Name" id="student-first-name"></input><br></br>
          <input className="user-signup-name-field" placeholder="Last Name" id="student-last-name"></input><br></br>
          <input className="user-signup-email-field" placeholder="Email" id="student-email"></input><br></br>
          <textarea className="user-signup-comment-field" placeholder="Tell the instructor something!" id="student-description"></textarea>
          {this.props.live && <button className="user-signup-submit-button" onClick={this.handleFormSubmission}>Register!</button> }
          {!this.props.live && <button className="no-user-signup-submit-button" disabled>Demo Purpose Only</button>}
        </div>
      </div>
    );
  }

});