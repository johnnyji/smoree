var ManageEmailHistory = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      ready: false, 
      emails: null
    };
  },
  componentWillMount: function() {
    UserActions.loadEmails(this.props.user.id, this.loadEmailsSuccess, this.loadEmailsError);
  },
  loadEmailsSuccess: function(data) {
    var emails = JSON.parse(data.emails)
    this.setState({
      emails: emails,
      ready: true
    });
  },
  loadEmailsError: function(xhr, requestCode, error) {
    debugger;
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    var emails = [];
    if (!s.ready) { return <div>Loading...</div> }
    for (var i = 0; i < s.emails.length; i++) {
      emails.push(<EmailContainer email={s.emails[i]} />)
    }
    return (
      <div>
        <h1>History of Emails Sent</h1>
        <div>{emails}</div>
      </div>
    )
  }
});