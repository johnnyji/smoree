var EmailBox = React.createClass({
  getInitialState: function () {
      return {
        sendable: false,
        sent: false,
        studentCount: null,
        flash: false,
        error: false
      }
  },
  handleEmailChange: function(e) {
    this.setState({ sent: false });
    if (e.target.value !== "") {
      this.setState({ sendable: true });
    }
  },
  handleEmailSend: function() {
    var email = document.getElementById("email_box").value;
    if (this.props.students.length === 0) {
      this.setState({
        flash: true,
        error: true
      });
    } else {
      this.setState({ error: false });
      UserActions.sendEmail(this.props.students, email, this.handleEmailSuccess, this.handleEmailError);
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
    debugger;
  },
  handleHideFlash: function() {
    this.setState({ flash: false })
  },  
  render: function() {
    var s = this.state;
    return (
      <div className="email-box-container">
        {s.sent && s.flash && <FlashMessage message={"Emailed to " + s.studentCount + " students"} flashType={"flash-success"} hideFlash={this.handleHideFlash} />}
        {s.error && s.flash && <FlashMessage message={"No students selected!"} flashType={"flash-error"} hideFlash={this.handleHideFlash} />}

        <textarea placeholder="Dear Students..." id="email_box" onChange={this.handleEmailChange}></textarea><br/>
        {s.sendable && <button className="email-box-submit-button" onClick={this.handleEmailSend}>Send Email</button>}
      </div>
    )
  }
});