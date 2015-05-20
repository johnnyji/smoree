var DateContainer = React.createClass({
  propTypes: {
    date: React.PropTypes.string.isRequired,
    emails: React.PropTypes.array.isRequired
  },

  render: function() {
    var p = this.props;
    var s = this.state;
    var emails = [];
    debugger;
    for (var i = 0; i < p.emails.length; i++) {
      emails.push(<EmailContainer email={p.emails[i]}/>)
    }
    return (
      <div>
        <div>{p.date}</div>
        <div>{emails}</div>
      </div>
    )
  }
});