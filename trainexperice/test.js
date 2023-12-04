let x 
x = x?? ['emam day']
console.log(x?.[0]);
//ข้อใดคือคำสั่งที่สามารถเปรียบเทียบค่าว่าในarrayเป็นempty objectหรือไม่
// if(x === {}){
//     console.log('empty object');
// }
if(Object.keys(x).length === 0){
    console.log('empty object');
}//answer
if(Object.values(x).length === 0){
    console.log('empty object');
}
//คำตอบคืออะไร
let arr =['','','']
arr1 = arr ?? [1,2]
console.log(arr1.length);
// object["property"]
//which is higher order function
function m (){n()}
function b(G){
    console.log(G.toLowerCase());
}
function a(b){
    return b() * 100
}//ans
let I = 'HELLO'
console.log(a(b(I)));
//which program not error
y=!1
let x = 5 -'1'//ans

const f4 = (x) =>
    const value = x || 0
    return value * value;
const [r,...y] = ['a','e','i','o','u']
console.log(r,y);
const {...c} = {a:{a:1,b:2}}
console.log(c);
//result 
class Animal{}
console.log(typeof Animal);
//
function doSomting(x){
    const value = x || 0
    return value * value;
}
//1
const f1 = (x) => {
    const value = x || 0
    return value * value;
}
//2
const f2 = x => {
    const value = x || 0
    return value * value;
}
