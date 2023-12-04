// x is a global scope
let x = 1;
console.log(x);
{
  // x is a block scope
  let x = 2;
  console.log(x);
  var y = 111;
}
console.log(y); //var y is global scope beacause var don't know about block scope
// java script not allow duplicate variable in same scope
// let x = 3 x in global scope already
x = 3; //allow because  this is assign value to x in global scope
console.log(x);
function doIt() {
  if (1) {
    //block scope
    let x = 4;
    console.log(x);
  } else console.log('not 1');
  console.log(x); //x in global scope //x is declare(build) in line 2 but reassign value in line 13}//not in if (block scope)
}
doIt();

function doSomething() {
  // x is a function scope
  let x = 'A';
  console.log(x); //fuction scope //'A'
}
doSomething(); //A
console.log(x); //global scope //3//x in global scope //x is declare(build) in line 2 but reassign value in line 13

//Explicit conversion
let c = 123;
console.log(typeof c);
//number->string
console.log(typeof String(c));
//number->boolean
console.log(typeof Boolean(c));

//if need boolean but 1 is number , so implicit conversion is called automatically
if (1) console.log('implicit conversion is working');
