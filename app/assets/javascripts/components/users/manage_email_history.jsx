var ManageEmailHistory = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
    resendEmail: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      componentReady: false, 
      error: false,
      emailsByDate: null,
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
        componentReady: true
      });
    }
  },
  loadEmailsError: function(xhr, requestCode, error) {
    this.setState({
      componentReady: true,
      error: true
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    var dates = [];

    if (s.noEmails) { return <h1>No Previous Emails</h1> }
    if (!s.componentReady) { return <Spinner /> }
    if (s.componentReady && s.error) { return <div>Error! Could not load.</div> }

    for (var i = 0; i < s.emailsByDate.length; i++) {
      dates.push(
        <DateContainer 
          date={s.emailsByDate[i].created_at} 
          emails={s.emailsByDate[i].emails} 
          resendEmail={p.resendEmail}
        />
      )
    }

    return (
      <div>
        <div className="email-history-container">
          <div>{dates}</div>
        </div>
      </div>
    )
  }
});