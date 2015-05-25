var DataNav = React.createClass({
  propTypes: {
    handleClick: React.PropTypes.func.isRequired,
    activeTabIndex: React.PropTypes.number.isRequired,
    tabs: React.PropTypes.array.isRequired
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
    return (
      <div className="data-navbar">
        {tabs}
      </div>
    );
  }
});