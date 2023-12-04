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