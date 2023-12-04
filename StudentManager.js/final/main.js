const studentManager = require('./StudentManager');
const sm = studentManager();

for (let i = 0; i < 10; i++) {
  sm.addStudent(i, `${i}`);
}
console.log(sm.getAllStudentsInfo());
sm.enrollStudent(9, 'INT202');
sm.enrollStudent(9, 'INT201');
console.log(sm.getAllStudentsInfo(9));
