function sum(num1, num2, num3) {
    return num1 + num2 + num3
  }
  let nums = [5, 20, 15]
  //spread parameter
  console.log([...nums]) //5 20 15
  console.log(...nums) //5 20 15
  console.log(sum(...nums)) //40, spread operator
  console.log(sum(nums)) //5,20,15undefinedundefined
  