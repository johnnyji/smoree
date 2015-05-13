var StudentsContainer = React.createClass({
  handleSelectedStudent: function(studentId) {
    this.setState({
      selectedStudents: this.state.selectedStudents.concat([studentId])
    });
  },
  render: function() {
    var students = [];
    var p = this.props;
    for (var i = 0; i < p.students.length; i++) {
      students.push(
        <Student 
          student={p.students[i]} 
          handleSelectedStudent={p.handleSelectedStudent}
          handleRemoveSelectedStudent={p.handleRemoveSelectedStudent}
        />

      )
    }
    return (
      <div className="students-container">{students}</div>
    )
  }
});