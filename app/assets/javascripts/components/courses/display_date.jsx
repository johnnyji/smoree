var DisplayDate = React.createClass({
  formatDate: function(date) {
    return moment(date).format("MMMM Do YYYY");
  },
  render: function() {
    var p = this.props;
    return (
      <div className="display-additional-div">
        <h3 className="display-detail-title">Dates:</h3> 
        <p>{this.formatDate(p.startDate)} - {this.formatDate(p.endDate)}</p>
      </div>
    )
  }
});