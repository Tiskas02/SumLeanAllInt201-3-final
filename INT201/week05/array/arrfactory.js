const x = Array.of(10)
console.log(x);//[10]//element in array
console.log(x.length);//1

const  y = Array.of(x)//array 2D
console.log(y);//[[10]]
console.log(y.length);//1

const z = Array.of('1',1+1,true)
console.log(z);//['1',2,true]
console.log(z.length);//3

//5. create array with Array.from()
const r =[1,2,4,8,16,32]
const t = Array.from(x)
console.log(r);
console.log(t);
console.log(t.length);

//memory addres of x equal to memory address of y
if (r === t) console.log('r === t');
else console.log('rr==t')//r!==t
//if want it to equal use r == t and change const in t to let
