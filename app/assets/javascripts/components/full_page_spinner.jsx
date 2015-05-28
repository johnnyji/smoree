var FullPageSpinner = React.createClass({
  render: function() {
    return (
      <div className="sk-spinner sk-spinner-three-bounce" id="full-page-spinner">
        <div className="sk-bounce1"></div>
        <div className="sk-bounce2"></div>
        <div className="sk-bounce3"></div>
      </div>
    );
  }
});