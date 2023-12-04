let x = [1, 9, 11];
const y = [3, 5, 7];
//using sperad operater [...] to copy elements of x and y
const z = [...x, ...y];
console.log(z);
const a = [1, ...y, 11];
console.log(a); //[ 1, 3, 5, 7, 11 ]
console.log(a[2]);//5
const str = 'hello world';
const collStr = [...str];
console.log(collStr);
// [
//     'h', 'e', 'l', 'l',
//     'o', ' ', 'w', 'o',
//     'r', 'l', 'd'
//   ]
const str1 = 'Ploy Napachanok';
const collStr1 = [...str1];
console.log(collStr1);
for (const ch of collStr){
    console.log(ch)
}
// h
// e
// l
// l
// o

// w
// o
// r
// l
//d