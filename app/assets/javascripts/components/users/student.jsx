var Student = React.createClass({
  getInitialState: function () {
      return {
        selected: false,
        containerClass: "student-container",
        selectButtonText: "fa fa-plus" 
      } 
  },
  componentDidUpdate: function() {
    var s = this.state;
    var p = this.props;
    if (!s.selected && p.selectedAll) {
      this.selectStudent()
    } else if (s.selected && p.droppedAll) {
      this.dropStudent()
    }
  },
  handleSelectClick: function() {
    if (this.state.selected || this.props.selectedAll) {
      this.dropStudent();
      this.props.handleRemoveSelectedStudent(this.props.student.id);
    } else if (!this.state.selected || this.props.droppedAll) {
      this.selectStudent();
      this.props.handleSelectedStudent(this.props.student.id);
    }
  },
  selectStudent: function() {
    this.setState({ 
      selected: true,
      containerClass: "student-container selected",
      selectButtonText: "fa fa-remove"
    });
  },
  dropStudent: function() {
    this.setState({
      selected: false,
      containerClass: "student-container",
      selectButtonText: "fa fa-plus"
    });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div className={s.containerClass}>
        <h1>
          <i className="fa fa-user" onClick={this.handleSelectClick}></i>
          &nbsp;&nbsp;{p.student.first_name} {p.student.last_name}
        </h1>
        <button onClick={this.handleSelectClick}>
          <i className={s.selectButtonText}></i>
        </button>
        <p>
          <i className="fa fa-envelope" onClick={this.handleSelectClick}></i>&nbsp;&nbsp;
          {p.student.email }
        </p>
      </div>
    )
  }

});