var Clipboard = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      copied: false
    }
  },
  componentDidMount: function() {
    var self = this;
    var client = new ZeroClipboard(self.refs.clipboard.getDOMNode());

    client.on("copy", function(e) {
      var clipboard = e.clipboardData;
      clipboard.setData( "text/plain", self.props.text );
      self.setState({ copied: true });
    });
  },
  hideFlash: function() {
    this.setState({ copied: false });
  },
  render: function() {
    return (
      <div className="clipboard">
        {this.state.copied && <ReactFlashMessage flashType={"flash-success"} message={"Copied " + this.props.text} hideFlash={this.hideFlash}/>}
        <i className="fa fa-link nav-option-icons" ref="clipboard" ></i>
      </div>
    );
  }
});