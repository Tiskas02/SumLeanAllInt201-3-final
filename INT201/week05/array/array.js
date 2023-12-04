//array can contain different data type in one array
const x = [1, true, 'A'];
console.log(x);
console.log(x.length); //lenght id  size of array
console.log(x[0]); //get thr first element of array
//array size can grow dynamically
x[1] == false //assign data to index1
x[x.length] = 555//append a new elements
x.push(888)//append a new elements automatically
console.log(x);
//x[expression to find index number]
console.log(x[x.length - 1]); //get the last element of array

const y = []; //y is emthy array
let z;

console.log(typeof y); //object
console.log(typeof z); //undefined
//check emthy
if (y.length === 0) console.log('y is an emthy array');
else console.log('y is not and empty array');

if (z?.length === 0)
  //err Cannot read properties of undefined
  console.log('z is an emthy array');
else console.log('z is not and empty array'); //optional chaining can run this ?.
