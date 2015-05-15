var UserEmailBox = React.createClass({
  getInitialState: function () {
      return {
        sendable: false,
        sent: false,
        studentCount: null,
        flash: false,
        error: null
      }
  },
  handleEmailChange: function(e) {
    this.setState({ sent: false });
    if (e.target.value !== "") {
      this.setState({ sendable: true });
    }
  },
  handleEmailSend: function() {
    var subject = document.getElementById("email_subject").value;
    var email = document.getElementById("email_box").value;
    if (subject === "") {
      this.setError("Your subject can't be empty!");
    } else if (email === "") {
      this.setError("Your email can't be empty!");
    } else if (this.props.students.length === 0){
      this.setError("Please select students to send to");
    } else {
      this.setState({ error: null });
      debugger;
      UserActions.sendEmail(this.props.students, subject, email, this.handleEmailSuccess, this.handleEmailError);
    }
  },
  handleEmailSuccess: function(data) {
    this.setState({
      sent: true,
      studentCount: data.student_count,
      flash: true
    });
  },  
  handleEmailError: function(XHR) {
    this.setError("Error :( Unable to set email");
  },
  handleHideFlash: function() {
    this.setState({
      flash: false,
      error: null
    })
  },
  setError: function(errorMessage) {
    this.setState({
      flash: true,
      error: errorMessage
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    return (
      <div className="email-box-container">
        <div className="email-box-info">
          <h2>Student Mailing List</h2>
          <p>This mailing list is for all your students. Only use this when you want to contact every student you have!</p>
          <ul>
            <h2>Examples</h2>
            <li>Contact specific students</li>
            <li>Update students on change of schedule</li>
            <li>Inform students on emergencies</li>
          </ul>
        </div>

        <div className="email-box-form">
          {s.sent && s.flash && <ReactFlashMessage message={"Emailed to " + s.studentCount + " students"} flashType={"flash-success"} hideFlash={this.handleHideFlash} />}
          {s.error && s.flash && <ReactFlashMessage message={s.error} flashType={"flash-error"} hideFlash={this.handleHideFlash} />}

          <input placeholder="Email Subject" id="email_subject" onChange={this.handleEmailChange}></input><br/>
          <textarea placeholder="Dear Students..." id="email_box" onChange={this.handleEmailChange}></textarea><br/>

          {!s.sendable && <button className="no-email-box-submit-button" onClick={this.handleEmailSend}>Compose your email</button>}
          {s.sendable && <button className="email-box-submit-button" onClick={this.handleEmailSend}>Send Email</button>}
        </div>
      </div>
    )
  }
});