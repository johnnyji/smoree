var BarChart = React.createClass({
  propTypes: {
    labels: React.PropTypes.array.isRequired,
    views: React.PropTypes.array.isRequired,
    signups: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      componentReady: false
    };
  },
  componentWillMount: function() {
    // var data = {
    //   labels: this.props.labels,
    //   datasets: [
    //     {
    //       label: "Views",
    //       fillColor: "rgba(220,220,220,0.5)",
    //       strokeColor: "rgba(220,220,220,0.8)",
    //       highlightFill: "rgba(220,220,220,0.75)",
    //       highlightStroke: "rgba(220,220,220,1)",
    //       data: this.props.views
    //     },
    //     {
    //       label: "Sign Ups",
    //       fillColor: "rgba(151,187,205,0.5)",
    //       strokeColor: "rgba(151,187,205,0.8)",
    //       highlightFill: "rgba(151,187,205,0.75)",
    //       highlightStroke: "rgba(151,187,205,1)",
    //       data: this.props.signups
    //     }
    //   ]
    // }
    // var ctx = document.getElementById("barchart").getContext("2d");
    // var barChart = new Chart(ctx).Bar(data);
    var data = {
      labels: this.props.labels,
      series: [
        this.props.views,
        this.props.signups 
      ]
    };
    this.setState({ componentReady: true });
  },
  componentWillUpdate: function() {
    var data = {
      labels: this.props.labels,
      series: [
        this.props.views,
        this.props.signups 
      ]
    };
    new Chartkick.LineChart("course-chart", data)
  },
  render: function() {
    var p = this.props;
    var s = this.state;

    if (!s.componentReady) { return <Spinner /> }
    return (
      <div>
        <div id="course-chart"></div>
      </div>
    );
  }
});