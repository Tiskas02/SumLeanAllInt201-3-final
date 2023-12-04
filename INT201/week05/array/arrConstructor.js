//3. create array with Array ()constructor
//3.1 with empty parametor
const x = new Array() //x=[]
console.log(x);
console.log(x.length);
//3.2 with inital size of array
const y =new Array(5)
console.log(y);//[ <5 empty items> ]
console.log(y.length);//5

//3.3with inital value 
const z =new Array(1,3,5,7,9)
console.log(z);//(1,3,5,7,9)
console.log(z.length);//5