var EmailBox = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    students: React.PropTypes.array.isRequired
  },
  getInitialState: function () {
      return {
        sendable: false,
        sent: false,
        email: "",
        studentCount: null,
        flash: false,
        error: null
      }
  },
  handleEmailChange: function(e) {
    this.setState({ sent: false });
    if (e !== "") {
      this.setState({
        email: e,
        sendable: true 
      });
    }
  },
  handleEmailSend: function() {
    if (this.state.email === "") {
      this.setError("Your email can't be empty!");
    } else if (this.props.students.length === 0){
      this.setError("Please select students to send to");
    } else {
      this.setState({ error: null });
      UserActions.sendCourseEmail(this.props.course.id, this.props.students, this.state.email, this.handleEmailSuccess, this.handleEmailError);
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
        <div className="email-box-form">
          <div className="empty-space"></div>
          {s.sent && s.flash && <ReactFlashMessage message={"Emailed to " + s.studentCount + " students"} flashType={"flash-success"} hideFlash={this.handleHideFlash} />}
          {s.error && s.flash && <ReactFlashMessage message={s.error} flashType={"flash-error"} hideFlash={this.handleHideFlash} />}
          <h1>{p.course.title} Email List</h1><br/>
          <ReactQuill 
            theme="snow"
            className="email-box"
            onChange={this.handleEmailChange}
          />
          {!s.sendable && <button className="no-email-box-submit-button" onClick={this.handleEmailSend}>Compose your email</button>}
          {s.sendable && <button className="email-box-submit-button" onClick={this.handleEmailSend}><i className="fa fa-paper-plane"></i>&nbsp;&nbsp;Send Email</button>}
        </div>
      </div>
    )
  }
});