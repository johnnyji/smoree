var Student = React.createClass({
  getInitialState: function () {
      return {
        selected: false,
        containerClass: "student-container",
        selectButtonText: "Select" 
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
      selectButtonText: "Drop"
    });
  },
  dropStudent: function() {
    this.setState({
      selected: false,
      containerClass: "student-container",
      selectButtonText: "Select"
    });
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