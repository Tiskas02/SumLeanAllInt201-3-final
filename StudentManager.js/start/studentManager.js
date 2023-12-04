const Student = require('./student');

function studentManager() {
  const listStudent = [];

  function addStudent(name, id) {
    listStudent.push(new Student(name, id));
  }
  function getStudentInfo(id) {
    return listStudent.filter((student) => student.id === id);
  }

  function getAllStudentsInfo() {
    return listStudent.map((student) => student.getInfo()).join('\n');
  }
  function enrollStudent(id, course) {
    const serachID = listStudent.findIndex((student) => id === student.id);
    listStudent[serachID].enroll(course);
  }

  return { addStudent, getStudentInfo, getAllStudentsInfo, enrollStudent };
}

module.exports = studentManager;
