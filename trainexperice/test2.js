// Setup
const myArr = [1,2,3,4,5,5];

// Only change code below this line
let total = 0
for (let i = 0; i < myArr.length; i++) {
   total += myArr[i];
}
console.log(total);

const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
const f4 = (x) =>
  const value = x || 0
  return value*value


ข้อใดเป็นคำสั่งที่สามารถใช้ในการเปรียบเทียบว่า object เป็น emptyหรือไม่
if(x === {}) console.log('empty object1');
if(Object.values(x).length === 0)
console.log('empty object2');
if(Object.keys(x).length === 0)
console.log('empty object3');