if ('a' === 'A') console.log('putty');
else console.log('not putty');

let str;
console.log(str.length); //error because str is undefined and error in length is udefind
//use this
//console.log(str?.length);

let str1 = 'apple';
let str2 = 'Apple';
let str3 = 'applE';
let str4 = 'apple';
console.log(str1 === str2); //false 'a' === 'A'
console.log(str1 !== str2); //true 'a' !== 'A'
console.log(str1 === str4); //true 'a' !== 'A','p' !== 'P','p' !== 'P','l' !== 'L','e' !== 'E'

console.log(str1 < str2); //false 'a' < 'A' 97 < 65 return false

console.log(str1.includes('App')); //false because 'apple' not include 'App'//case sensitive search contains Big A  not contain small a
console.log(str1.includes('app')); //true because 'apple' include 'app'//case sensitive search contains small a  contain small a

//include() with case insensitive
console.log(str1.toLowerCase().includes('App'.toLowerCase())); //true because 'apple' include 'app'//case sensitive search contains small a  contain small a
console.log(str1.toUpperCase().includes('App'.toUpperCase())); //true because 'apple' include 'app'//case sensitive search contains small a  contain small a

// === vs includes()
// === check value and data type
// includes() check value only
// not same
//'apple'==='apple' return true\
//'app'==='Apple' return false
//'apple'.includes('apple') return true
//'apple'.includes('app') return true
