var AllStudentsContainer = React.createClass({
  render: function() {
    var students = [];
    var p = this.props;
    var s = this.state;
    for (var i = 0; i < p.students.length; i++) {
      students.push(
        <Student 
          student={p.students[i]}
          handleSelectedStudent={p.handleSelectedStudent}
          handleRemoveSelectedStudent={p.handleRemoveSelectedStudent}
          selectedAll={p.selectedAll}
          droppedAll={p.droppedAll}
        />
      )
    }
    if (students.length === 0) {
      return (
        <div className="students-container">
          <h1 className="students-container-title">No students yet!</h1>
        </div>
      )
    } else {
      return (
        <div className="students-container">
          <div>
            <h1 className="students-container-title">All Students</h1>
            <button className="select-all" onClick={p.handleSelectAll}>Select All</button>
            <button className="drop-all" onClick={p.handleDropAll}>Drop All</button>
          </div>
          {students}
        </div>
      )
    }
  }
});