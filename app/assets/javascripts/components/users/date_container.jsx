var DateContainer = React.createClass({
  propTypes: {
    date: React.PropTypes.string.isRequired,
    emails: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      emails: [] 
    }
  },
  componentWillMount: function() {
    var p = this.props;
    var emails = [];
    for (var i = 0; i < p.emails.length; i++) {
      emails.push(<EmailContainer email={p.emails[i]} emailSent={p.emailSent} resendError={p.resendError}/>)
    }
    this.setState({ emails: emails });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div className="date-container">
        <div className="date-header">{p.date}</div>
        <div className="date-emails-container">{s.emails}</div>
      </div>
    )
  }
});