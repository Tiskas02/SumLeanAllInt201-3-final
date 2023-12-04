//optional Chaining
let str = 'GGGGG'; //undefined
//let str = null will be error because null is not object
console.log(str?.null);
//console.log(str.toLowercase()); //undefined//error
let nums;
//console.log(nums[0]);//undefined//error
console.log(nums?.[0]);
let obj;
//console.log(obj.id);//undefined//error
console.log(obj?.id);
