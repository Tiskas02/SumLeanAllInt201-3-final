//array data type is object
const a = [1, 2, 3]; //a = memory address
const b = [1, 2, 3]; //b = memory address
console.log(a === b); //memory address of a is not equal to memory address of b because address not same so it is false

const c = b; //aliasing gice memory address of b to c
console.log(c === b); //memory address of c is equal to memory address of b because address same so it is true
// what about this?
c[0] = 'A';
console.log(c); //['A',2,3]'
console.log(b); //['A',2,3]'

a[0] = 333;
console.log(a); //[333,2,3]'
console.log(c); //['A',2,3]'
console.log(b); //['A',2,3]'
//object data type is object
const obj1 = { id: 1, name: 'Somchai' }; //obj1 = memory address
const obj2 = { id: 1, name: 'Somchai' }; //obj2 = memory address
const z = y; // give memory address of y to z
console.log(obj1 === obj2); //memory address of obj1 is not equal to memory address of obj2 because address not same so it is false
console.log(y === z); //memory address of y is equal to memory address of z because address same so it is true

y.id = 888;
console.log(x); //{id:1,name:'Somchai'}
console.log(y); //{id:888,name:'Somchai'}
console.log(z); //{id:888,ame:'Somchai'}

//primitive type
let m = 5; // m store 5
let n = 10; //n store 10
let o = n; //n assign 10 to o then o store 10
m = 999; //m reassign to 999 then m stores 999
o = 1000; //o reaasign to 1000 then o stores 1000
console.log(o === n); //1000===10 //false
console.log(m); //999
console.log(n); //10
console.log(o); //5
