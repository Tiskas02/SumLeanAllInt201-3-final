//nullish Colescing
//[] represents empty array
//{} represents empty object
let arr; //undefined
let arr2 = []; //empty array
arr = arr2 ?? [1, 2, 3, 4, 5];
console.log(arr); //12345
console.log(arr2.length); //empty array

let nums = [1, 2, 3];
let arr3;
arr3 = nums ?? [1, 2, 3, 4, 5];
console.log(arr3); //123
console.log(nums);
