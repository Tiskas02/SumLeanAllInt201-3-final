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

class Person3{
  constructor(name,age){
    this.name = name
    this.age = age
  }
}
const lang = new Person3('leng',50)
console.log(lang);

class Student {
  constructor(name,score,attendance) {
    this.name = name,
    this.score = score,
    this.attendance =attendance
  }
}

const stu = new Student('sfsf','sfsf','sfsf')
console.log(stu);

function createPerson(name,status) {
  return {
     fullname:name,
  status

  }
}
const Gucci = createPerson('Saksit','in relation')
Gucci.birthdate = 1/0/2
console.log(Gucci);

const animal = {
  name : 'mango',
  1800: 1
}
//bracket notation
console.log(animal[2000-200]);//1
console.log(animal[false ? 'name': 2000-200 ]);//1

const obj = {
  foo() {
    return 'bar';
  },
};
const obj2 = {
  foo: function (name) {
    return name
  },
  bar: function () {
    // …
  },
};
console.log(obj2.foo('putty'));
const objkey = Object.keys(obj2)//properties key recive array
console.log(objkey);