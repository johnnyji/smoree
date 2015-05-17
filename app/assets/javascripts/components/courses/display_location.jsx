var DisplayLocation = React.createClass({
  render: function() {
    return (
      <div className="display-additional-div">
        <h3 className="display-detail-title">Address:</h3>
        <p>{this.props.address}</p>
      </div>
    )
  }
});