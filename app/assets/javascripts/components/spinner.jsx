var Spinner = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    idType: React.PropTypes.string
  },
  render: function() {
    var p = this.props;
    return (
      <div className="sk-spinner sk-spinner-three-bounce" id={p.idType}>
        <div className={"sk-bounce1 " + p.color}></div>
        <div className={"sk-bounce2 " + p.color}></div>
        <div className={"sk-bounce3 " + p.color}></div>
      </div>
    )
  }
});