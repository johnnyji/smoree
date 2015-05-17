var CourseDetails = React.createClass({

  render: function() {
    var p = this.props;
    return (
      <div className="course-additional-info">
        {p.startDate && <DisplayDate startDate={p.startDate} endDate={p.endDate}/>}
        {p.address && <DisplayLocation address={p.address}/>}
      </div>
    )
  }
});