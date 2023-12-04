//1.create array by literal
const x = [1, 3, 5, 7, 9]
//elements are array object type 
const students = [
  //array type contain object
  { id: 651305000078, name: 'Somchai' },
  { id: 6513050000782, name: 'Somsri' },
  { id: 6513050000728, name: 'Sriri' }
];
console.log(students.length); //3
console.log(students[0]); // {id:651305000078, name:'Somchai'}

const studentIds = [
  [2022, 2234, 2342],
  [3242, 23423424],
  [23424, 234234],
  [2342342]
];
console.log(studentIds); //4
console.log(studentIds[1]); //    [3242,23423424],
console.log(studentIds[studentIds.length - 1]); //    [2342342]
console.log(studentIds[0][1]); //2234
console.log(studentIds[0][2]); //2342
