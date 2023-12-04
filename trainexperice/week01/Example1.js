// Using switch to show Subject detail

// case   : console.log
// INT201 : "Client Side"
// INT202 : "Server Side"
// INT205 : "Database Management"
const Subject = 'INT205';
switch (Subject) {
  case 'INT201':
    console.log('Client Side');
    break;
  case 'INT202':
    console.log('Server Side');
    break;
  case 'INT205':
    console.log('Database Management');
    break;
}

// Now try using If-Else to show Subject detail
if (Subject === 'INT201') {
  console.log('Client Side');
} else if (Subject === 'INT202') {
  console.log('Server Side');
} else if (Subject === 'INT205') {
  console.log('Database Management');
}
// Did you see any difference between Switch and If-Else?

const students = [
  'Kongphop',
  'Jittra',
  'Suksawat',
  'Supa',
  'Wanchana',
  'Walaiporn',
  'Pasutorn'
];

// Make a For Loop program that say "Greeting <student_name>" all students
// Example output
for (data of students) {
  console.log(`Greeting ${data}`);
} //result = Greeting Kongphop,Jittra,Suksawat,Supa,Wanchana,Walaiporn,Pasutorn
for (data of students) {
  console.log('Greeting ' + students[data]);
} //return undefined
for (data in students) {
  console.log(`Greeting ${data}`);
} //result = Greeting 0,1,2,3,4,5,6
for (data in students) {
  console.log('Greeting ' + students[data]);
} //result = Greeting Kongphop,Jittra,Suksawat,Supa,Wanchana,Walaiporn,Pasutorn

const dataSet1 = [
  'Male',
  'Female',
  'Female',
  'Female',
  'Male',
  'Male',
  'Male',
  'Female',
  'Male',
  'Female',
  'Male',
  'Female',
  'Male',
  'Female',
  'Male',
  'Female',
  'Male',
  'Female',
  'Male'
];
// Make a program that can count "Male" and "Female" in dataSet
// And then console.log how many count in "Male" and "Female"
// "Male : xx"
// "Female : xx"
let Male = 0;
let Female = 0;
for (data1 of dataSet1) {
  if (data1 === 'Male') {
    Male++;
  } else {
    Female++;
  }
}
console.log(`Male : ` + Male);
console.log(`Female : ` + Female);
