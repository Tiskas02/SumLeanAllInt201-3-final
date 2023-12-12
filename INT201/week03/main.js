const $a = 3;
const _b1c = 4;
console.log($a);
console.log(_b1c);

let x = 5;
//weekly and dynamic data type
console.log(x);
console.log(typeof x);
x = 'Hello';
console.log(x);
console.log(typeof x);
x = true;
console.log(x);
console.log(typeof x);
console.log(typeof null);
console.log(typeof undefined);

//array use[]
let nums = [1, 2, 3, 4, 5];
console.log(typeof nums);
//object use{},{propertyKey1:propertyValue1,propertyKey2:propertyValue2}
const obj = { id: 1, title: 'Somchai' };
console.log(typeof obj);

//obj = nums //not allow
nums = obj; //allow because  nums is let can change
//num have address of obj impaction is nums change obj change too
nums.id = 255;
console.log(obj);
console.log(nums);

const ids = [101, 105, 110, 120];
ids[0] = 1;
console.log(ids);//change value of array
ids[ids.length - 1] = 444;
console.log(ids);//1,105,110,444
ids[ids.length] = 555;
console.log(ids);

let m,
    n,
    o = 1,
    p = true,
    q = null;
console.log(m); //return undefined
console.log(n); //return undefined
console.log(o);
console.log(p);
console.log(q); //null return null

if (m === undefined) console.log('m is undefined');
if (q === null) console.log('q is undefined');
// == check only value, do not care data type
if ('2' == 2) console.log(`'2' == 2`);
// === check data type first , if the data type does not match then return false otherwise value will be check
if ('2' === 2) console.log(`'2 === 2'`);
else console.log(`'2' !== 2`);

if (typeof m === 'undefined') console.log(`type of m === 'undefined'`);
//null has type of object
if (typeof q === 'object') console.log(`type of q === 'object'`);

//build  function
function doSomething(activity) {
  return activity; //stop function send back value
}
console.log(doSomething('sleep'));
console.log(typeof doSomething);
