const Student = require('./Student'); //
// import Student from './Student'; //only browser

function studentManager() {
  const students = [];

  function addStudent(id, name) {
    return students.push(new Student(id, name));
  }

  function getStudentInfo(id) {
    return students.find(({ id: studentId }) => studentId === id);
  }
  function enrollStudent(id, name) {
    const findIndex = students.findIndex(
      ({ id: studentId }) => studentId === id
    );
    students[findIndex].enroll(name);
  }
  function getAllStudentsInfo() {
    return students.map((student) => student.getInfo());
  }

  return { addStudent, getStudentInfo, enrollStudent, getAllStudentsInfo };
}

module.exports = studentManager;
