var UserEmailBox = React.createClass({
  propTypes: {
    initalEmailValue: React.PropTypes.string
  },
  getInitialState: function () {
      return {
        sendable: false,
        sending: false,
        sent: false,
        email: "",
        studentCount: null,
        flash: false,
        error: null
      }
  },
  componentDidMount: function() {
    if (this.props.initialEmailValue.length > 0) {
      this.setState({
        sendable: true,
        email: this.props.initialEmailValue
      });
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
      this.setState({
        error: null,
        sending: true
      });
      UserActions.sendEmail(this.props.students, this.state.email, this.handleEmailSuccess, this.handleEmailError);
    }
  },
  handleEmailSuccess: function(data) {
    this.setState({
      sent: true,
      sending: false,
      studentCount: data.student_count,
      flash: true
    });
  },  
  handleEmailError: function(XHR) {
    this.setError("Error :( Unable to send email");
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
          {s.sent && s.flash && <ReactFlashMessage message={"Emailed to " + s.studentCount + " students"} flashType={"flash-success"} hideFlash={this.handleHideFlash} />}
          {s.error && s.flash && <ReactFlashMessage message={s.error} flashType={"flash-error"} hideFlash={this.handleHideFlash} />}
          <h1>General Email List</h1><br/>
          <ReactQuill 
            theme="snow"
            value={p.initialEmailValue}
            className="email-box"
            onChange={this.handleEmailChange}
          />
          {!s.sendable && <button className="no-email-box-submit-button" onClick={this.handleEmailSend}>Compose your email</button>}
          {s.sending && !s.sent && <Spinner />}
          {s.sendable && <button className="email-box-submit-button" onClick={this.handleEmailSend}><i className="fa fa-paper-plane"></i>&nbsp;&nbsp;Send Email</button>}
        </div>
      </div>
    )
  }
});