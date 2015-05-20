var ManageEmailHistory = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      ready: false, 
      error: false,
      emailsByDate: null
    };
  },
  componentWillMount: function() {
    UserActions.loadEmails(this.props.user.id, this.loadEmailsSuccess, this.loadEmailsError);
  },
  loadEmailsSuccess: function(data) {
    this.setState({
      emailsByDate: data,
      ready: true
    });
  },
  loadEmailsError: function(xhr, requestCode, error) {
    this.setState({
      ready: true,
      error: true
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    var dates = [];

    if (!s.ready) { return <div>Loading...</div> }
    if (s.ready && s.error) { return <div>Error! Could not load.</div> }

    for (var i = 0; i < s.emailsByDate.length; i++) {
      dates.push(<DateContainer date={s.emailsByDate[i].created_at} emails={s.emailsByDate[i].emails} />)
    }

    return (
      <div>
        <h1>History of Emails Sent</h1>
        <div>{dates}</div>
      </div>
    )
  }
});