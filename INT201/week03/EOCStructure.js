let nums = [1, 2, 3, 4, 5];
console.log(nums[0]); //reading nums array index 0
let value; //optional chaning use when value is undefined
//optioin chaning protect null and undefined value of variables to keep program running
console.log(value?.[0]); //optional chaning

let obj = { id: 1, name: 'Somchai' };
console.log(obj.id); //reading obj property id

let obj2;
console.log(obj2?.id); //optional chaning use when obj2 is undefined
