class Student {
  course = [];
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  enroll(course) {
    this.course.push(course);
  }

  getInfo() {
    return `ID: ${this.id} | Name: ${this.name} | CourseList: ${this.course}`;
  }
}

module.exports = Student;
