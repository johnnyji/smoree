var DataNav = React.createClass({
  propTypes: {
    handleClick: React.PropTypes.func.isRequired,
    activeTabIndex: React.PropTypes.number.isRequired,
    tabs: React.PropTypes.array.isRequired,
    navReady: React.PropTypes.bool.isRequired
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    var tabs = [];

    for (var i = 0; i < p.tabs.length; i++) {
      if (i === p.activeTabIndex) {
        tabs.push(<div className="tab active" >{p.tabs[i]}</div>)
      } else {
        tabs.push(<div className="tab" onClick={this.props.handleClick.bind(this, i)}>{p.tabs[i]}</div>)
      }
    }

    if (!this.props.navReady) { return <div/> }
    return (
      <div className="data-navbar">
        <h1 className="data-nav-title">Courses</h1>
        {tabs}
      </div>
    );
  }
});