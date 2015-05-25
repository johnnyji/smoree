var DashboardNav = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array.isRequired,
    activeTabIndex: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired
  },
  handleClick: function(tabIndex) {
    this.props.handleClick(tabIndex);
  },  
  render: function() {
    var tabs = [];
    var activeTab = this.props.tabs[this.props.activeTabIndex];

    for (var i = 0; i < this.props.tabs.length; i++ ) {
      var tab = this.props.tabs[i];
      if (tab === activeTab) {
        tabs.push(
          <i className={"user-dashboard-tab active fa " + tab} onClick={this.handleClick.bind(this, i)}></i>
        );
      } else {
        tabs.push(
          <i className={"user-dashboard-tab fa " + tab} onClick={this.handleClick.bind(this, i)}></i>
        );
      }
    }  
    return (
      <div className="user-dashboard-nav">{tabs}</div>
    )
  }
});