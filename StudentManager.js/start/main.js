const studentManager = require('./studentManager');

const sm1 = studentManager();
sm1.addStudent('mos', 78);
sm1.addStudent('ikkew', 65);

// console.log(sm1.getAllStudentsInfo());
console.log(sm1.getStudentInfo(78));
sm1.enrollStudent(78, 'INT202');
sm1.enrollStudent(65, 'INT201');
console.log(sm1.getAllStudentsInfo());
