var ManageEmailHistory = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      ready: false, 
      error: false,
      emailsByDate: null,
      emailSent: false,
      resendError: false,
      noEmails: false
    };
  },
  componentWillMount: function() {
    UserActions.loadEmails(this.props.user.id, this.loadEmailsSuccess, this.loadEmailsError);
  },
  loadEmailsSuccess: function(data) {
    if (data.length < 1) {
      this.setState({ noEmails: true });
    } else {
      this.setState({
        emailsByDate: data,
        ready: true
      });
    }
  },
  loadEmailsError: function(xhr, requestCode, error) {
    this.setState({
      ready: true,
      error: true
    });
  },
  handleEmailSent: function() {
    this.setState({ emailSent: true });
  },
  handleResendError: function() {
    this.setState({ resendError: true });
  },
  hideFlash: function() {
    this.setState({
      emailSent: false,
      resendError: false
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    var dates = [];

    if (s.noEmails) { return <h1>No Previous Emails</h1> }
    if (!s.ready) { return <Spinner /> }
    if (s.ready && s.error) { return <div>Error! Could not load.</div> }


    for (var i = 0; i < s.emailsByDate.length; i++) {
      dates.push(<DateContainer date={s.emailsByDate[i].created_at} emails={s.emailsByDate[i].emails} emailSent={this.handleEmailSent} resendError={this.handleResendError}/>)
    }

    return (
      <div>
        {s.emailSent && <ReactFlashMessage flashType={"flash-success"} message={"Email sent"} hideFlash={this.hideFlash} />}
        {s.resendError && <ReactFlashMessage flashType={"flash-error"} message={"Please select students to send to"} hideFlash={this.hideFlash} />}
        <div className="email-history-container">
          <div>{dates}</div>
        </div>
      </div>
    )
  }
});