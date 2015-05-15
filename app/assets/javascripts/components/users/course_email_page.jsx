var CourseEmailPage = React.createClass({
  getInitialState: function () {
      return {
        selectedAll: false,
        droppedAll: true,
        selectedStudents: []
      }
  },
  handleSelectedStudent: function(studentId) {
    var students = this.state.selectedStudents;
    students.push(studentId);
    this.setState({
      selectedStudents: students,
      droppedAll: false
    });
  },
  handleRemoveSelectedStudent: function(studentId) {
    var students = this.state.selectedStudents;
    var i = students.indexOf(studentId);
    students.splice(i, 1);
    this.setState({
      selectedStudents: students,
      selectedAll: false
    });
    debugger;
  },
  handleSelectAll: function() {
    var allStudents = [];
    for (var i = 0; i < this.props.students.length; i++) {
      allStudents.push(this.props.students[i].id)
    }
    this.setState({
      selectedAll: true,
      droppedAll: false,
      selectedStudents: allStudents
    });
    debugger;
  },
  handleDropAll: function() {
    this.setState({
      selectedAll: false,
      droppedAll: true,
      selectedStudents: []
    });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div>
        <Banner imageUrl={p.course.image_url} title={p.course.title} />
        
        <EmailBox students={s.selectedStudents} course={p.course}/>

        <StudentsContainer 
          course={p.course}
          students={p.students}
          selectedAll={s.selectedAll}
          droppedAll={s.droppedAll}
          handleSelectAll={this.handleSelectAll}
          handleDropAll={this.handleDropAll}
          handleSelectedStudent={this.handleSelectedStudent}
          handleRemoveSelectedStudent={this.handleRemoveSelectedStudent}
        />
      </div>
    )
  }
});