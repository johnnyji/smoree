var DataNav = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      tabs: [],
      componentReady: false
    };
  },
  componentWillMount: function() {
    var p = this.props;
    var tabs = [];
    for (var i = 0; i < p.tabs.length; i++) {
      if (i === p.activeTabIndex) {
        tabs.push(<div className="tab active" >{p.tabs[i]}</div>)
      } else {
        tabs.push(<div className="tab" onClick={this.props.handleClick.bind(this, i)}>{p.tabs[i]}</div>)
      }
    }
    this.setState({ tabs: tabs });
  },
  render: function() {
    var s = this.state;
    return (
      <div className="data-navbar">
        {s.tabs}
      </div>
    );
  }
});