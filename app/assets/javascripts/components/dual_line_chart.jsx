var DualLineChart = React.createClass({
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
  componentDidMount: function() {
    this.drawChart();
    this.setState({ componentReady: true });
  },
  componentDidUpdate: function() {
    this.drawChart();
  },
  drawChart: function() {
    var data = [
      {"name": "Views", "data": this.props.views},
      {"name": "Sign Ups", "data": this.props.signups}
    ];
    new Chartkick.LineChart(this.refs.lineChart.getDOMNode(), data);
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var chartStyle = {
      width: "300px",
      height: "300px",
    }

    return (
      <div>
      {/*When the component first renders, it adheres the to the style, but the minute this component renders again, all the styling gone.*/}
        <div className={s.componentReady ? "hidden" : ""}><Spinner /></div>
        <div ref="lineChart" className={s.componentReady ? "dual-line-chart" : "dual-line-chart hidden"}></div>
      </div>
    );
  }
});