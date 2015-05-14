var Student = React.createClass({
  getInitialState: function () {
      return {
        selected: false,
        containerClass: "student-container",
        selectButtonText: "Select" 
      } 
  },
  handleSelectClick: function() {
    if (this.state.selected) {
      this.setState({
        selected: false,
        containerClass: "student-container",
        selectButtonText: "Select"
      });
      this.props.handleRemoveSelectedStudent(this.props.student.id);
    } else {
      this.setState({ 
        selected: true,
        containerClass: "student-container selected",
        selectButtonText: "Unselect"
      });
      this.props.handleSelectedStudent(this.props.student.id);
    }
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div className={s.containerClass}>
        <h1>{p.student.first_name} {p.student.last_name}</h1>
        <button onClick={this.handleSelectClick}>{s.selectButtonText}</button>
        <p>{p.student.email }</p>
      </div>
    )
  }

});