var EmailContainer = React.createClass({
  propTypes: {
    email: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      hasCourse: false,
      students: null,
      resend: false,
      previewEmail: false
    }
  },
  componentDidMount: function () {
    if (this.props.email.course !== "undefined") {
      this.setState({ hasCourse: true });
    }  
  },
  handleResendClick: function(e) {
    this.setState({ 
      resend: true,
      students: this.props.email.students
    })
  },
  handleEmailSent: function() {
    this.setState({ resend: false });
    this.props.emailSent();
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div ref="email" className="email-container">
        {s.resend && <ConfirmEmail onConfirm={this.handleSendEmail} email={p.email} emailSent={this.handleEmailSent} resendError={p.resendError}/>}
        <div className="email-body">
          <div>{p.email.body}</div>
          {s.hasCourse && <span>{p.email.course_title}</span>}
        </div>
        <div className="email-info">
          <button onClick={this.handleResendClick}>
            <i className="fa fa-paper-plane"></i>
            Resend
          </button>
          <div className="user-count">
            <i className="fa fa-user"></i>
            {p.email.student_count}&nbsp;
            {p.email.student_count == 1 ? "student" : "students"}
          </div>
        </div>
      </div>
    )
  }
});