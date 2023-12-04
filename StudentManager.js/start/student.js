class Student {
  courses = [];
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  enroll(course) {
    this.courses.push(course);
  }
  getInfo() {
    return `ID: ${this.id} | Name: ${this.name} | CourseList: ${this.courses}`;
  }
}

module.exports = Student;
