var Spinner = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  render: function() {
    debugger;
    return (
      <div className="sk-spinner sk-spinner-three-bounce">
        <div className={"sk-bounce1 " + this.props.color}></div>
        <div className={"sk-bounce2 " + this.props.color}></div>
        <div className={"sk-bounce3 " + this.props.color}></div>
      </div>
    )
  }
});