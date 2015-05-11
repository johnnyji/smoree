var DashboardNav = React.createClass({
  handleClick: function(tabIndex) {
    this.props.handleClick(tabIndex);
  },  
  render: function() {
    var tabs = []
    var activeTab = this.props.tabs[this.props.activeTabIndex];

    for (var i = 0; i < this.props.tabs.length; i++ ) {
      var tab = this.props.tabs[i];
      if (tab === activeTab) {
        tabs.push(
          <div className="user-dashboard-tab active" onClick={this.handleClick.bind(this, i)}>{tab}</div>
        );
      } else {
        tabs.push(
          <div className="user-dashboard-tab" onClick={this.handleClick.bind(this, i)}>{tab}</div>
        );
      }
    }  
    return (
      <div className="user-dashboard-nav">{tabs}</div>
    )
  }
});