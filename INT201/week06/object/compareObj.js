//=== or == compare reference address btw two objects
const st1 = { studentId : 65130500000, firstname : 'Somchai' ,lastname : 'SudLor' ,studentId : 65130500002};
const st3={ studentId : 65130500111, firstname : 'Somsri' ,lastname : 'Sudjai' }
const st4={ studentId : 65130500111, firstname : 'Somsri' ,lastname : 'Sudjai' }
const st2 =st1;
console.log(st1===st2);//true
console.log(st1===st3);//false
console.log(st3===st4);//false

// create compare function to compare two student objects
function compareStudent(st1,st2){
    return st1.studentId===st2.studentId && st1.firstname===st2.firstname && st1.lastname===st2.lastname;
}
console.log(compareStudent(st1,st2));//true
console.log(compareStudent(st3,st4));//true
console.log(compareStudent(st1,st3));//false

const obj1 = {}
const obj2 = {id : 1}
// if (obj1 === {}){
//     console.log('object is an empty object');
// }else console.log('object is not an empty object');

// console.log(JSON.stringify(obj1));
// console.log(JSON.stringify(obj2));
// if (JSON.stringify(obj1) === '{}'){
//         console.log('object is an empty object');
//     }else console.log('object is not an empty object');
// if (JSON.stringify(obj2) === '{}'){
//         console.log('object is an empty object');
//     }else console.log('object is not an empty object');
//use json.stringify to compare two objects
function isEmpty(obj){
    return JSON.stringify(obj) === '{}';
}
console.log(isEmpty(obj1));
console.log(isEmpty(obj2));

//spread operator
const obj3 = {id : 1,name : 'somchai'}
const obj4 = {...obj3}//copy property content from obj3 to obj4 not structure  
console.log(obj3);
console.log(obj4);