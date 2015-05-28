var FullPageSpinner = React.createClass({
  propTypes: {
    quotes: React.PropTypes.string
  },
  render: function() {
    return (
      <div>
        <div className="sk-spinner sk-spinner-three-bounce" id="full-page-spinner">
          <h1>{this.props.quote}</h1>
          <div className="sk-bounce1"></div>
          <div className="sk-bounce2"></div>
          <div className="sk-bounce3"></div>
        </div>
      </div>
    );
  }
});