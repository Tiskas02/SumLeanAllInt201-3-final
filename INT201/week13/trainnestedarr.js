function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log("/////////////////////");
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
        console.log("***************");
        console.log('number * is '+ `${product} * ${arr[i][j]}`);
      product =  product * arr[i][j];
      console.log("***************///////////");
      console.log(product);
      
    }
  }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

const stat = 10 +'+10'
console.log(stat);

function Person(name,age){
    this.name = name,
    this.age =age
    console.log(this);
}
const newPerson = new Person('John','55')
const newPerson2 = new Person('MOs','66')
console.log(newPerson);
console.log(newPerson2);
