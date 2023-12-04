function Reversenum(NumberInput) {
  const arr = [...NumberInput];
  const mid = Math.floor(arr.length / 2);
  for (let index = 0; index < mid; index++) {
    //swap
    const temp = arr[index];
    arr[index] = arr[arr.length - (1 + index)];
    arr[arr.length - (1 + index)] = temp;
  }
  return arr.join('');
}
console.log(Reversenum('65432'));
