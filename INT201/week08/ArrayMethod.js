const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'DAVID', score: 79 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
    { name: 'david', score: 85 }
  ]
  //return student who name in case in sensitive  is david and who score more than 80
const found = studentScores.find((element) => element.name.toLowerCase() === 'david' && element.score > 80)
console.log(found);
//findindex
const foundIndex= studentScores.findIndex(
    (student) => student.name.toLowerCase() === 'eve'
)
console.log(foundIndex);
//every
//find
const fruits =['apple','mango','orange','pineapple']
//method1
console.log(fruits.every(fruit => {

    console.log(fruit[0]);

    return ['a','e','i','o','u'].includes(fruit[0].toLowerCase())

}));
//method2
// let check = ignoreFruits.every(
//     (n) =>
//       n.toLowerCase().startsWith('a') ||
//       n.toLowerCase().startsWith('e') ||
//       n.toLowerCase().startsWith('i') ||
//       n.toLowerCase().startsWith('o') ||
//       n.toLowerCase().startsWith('u')
//   )
//method3

const isStartWithVowel = fruits.every((fruit) => {

  for (vowel of ['a', 'e', 'i', 'o', 'u']) {

    if (fruit.toLowerCase().startsWith(vowel)) {

      return true

    }

  }

  return false

})
console.log(isStartWithVowel)
 //reduce
 //concat with the first caracter of all fruit 
 //'amop'
 const result = fruits.reduce((firstCha,fruit)=>firstCha.concat(fruit.charAt(0)),'')
 console.log(result);


const str ='apple' //array of character
console.log(str.charAt(2));
console.log(str[3]);

//sum 
const num =[1,2,3,4,5]
const result2 = num.reduce((total2,current2) => total2 * current2)
console.log(result2);

const sellProducts = [
    {id:1,price:100,sell:5},
    {id:2,price:50,sell:2},
    {id:3,price:25,sell:10},
]

const result3 = sellProducts.reduce((total2,current3) => total2 + (current3.price * current3.sell),0)//if i don't put 0 in last element totoal to will return first object
console.log(result3);

const fruits2 =['apple','mango','orange','pineapple','banana','grape']
//splice remove
//splice(start,deleteCount,element1,element2)

const remove = fruits2.splice(1,2)//An array contains the delete element
console.log(remove);
console.log(fruits2);//['apple','pineapple','banana','grape']

//splice add
const add = fruits2.splice(2,0,'mango','orange')
console.log(add);
console.log(fruits2);//['apple','pineapple','mango','orange','banana','grape']

//splice replace
const replace = fruits2.splice(2,1,'mangosteen')
console.log(replace);//['mango']
console.log(fruits2);//['apple','pineapple','mangosteen','orange','banana','grape']

//slice
const fruits3 =['apple','mango','orange','pineapple','banana','grape']
const result4 = fruits3.slice(1,4)//start,end//end not include//return new array
console.log(fruits3.slice(1,-1));
console.log(fruits3.slice(1,-2));

//fill
//fill(value,start,end)
const fruits4 =['apple','mango','orange','pineapple','banana','grape']
const result5 = fruits4.fill('kiwi',1,3)//start,end//end not include//return new array
console.log(result5);//['apple','kiwi','kiwi','pineapple','banana','grape']

//push
const fruits5 =['apple','mango','orange','pineapple','banana','grape']
const result6 = fruits5.push('kiwi')//return new length
console.log(result6);//7
console.log(fruits5);//['apple','mango','orange','pineapple','banana','grape','kiwi']
//pop
const fruits6 =['apple','mango','orange','pineapple','banana','grape']
const result7 = fruits6.pop()//return last element
console.log(result7);//grape
console.log(fruits6);//['apple','mango','orange','pineapple','banana']
//shift
const fruits7 =['apple','mango','orange','pineapple','banana','grape']
const result8 = fruits7.shift()//return first element
console.log(result8);//apple
console.log(fruits7);//['mango','orange','pineapple','banana','grape']
//unshift
const fruits8 =['apple','mango','orange','pineapple','banana','grape']
const result9 = fruits8.unshift('kiwi')//return new length
console.log(result9);//7
console.log(fruits8);//['kiwi','apple','mango','orange','pineapple','banana','grape']
//includes
const animals =['dog','cat','bird','fish']
const massage = 'Practice makes perfect'
//string include - include substring (case sensitive)
console.log(massage.includes('ice'));//true
//array include - include string in array element (case sensitive)
console.log(animals.includes('ats'));//false

//reverse
const fruits9 =['apple','mango','orange','pineapple','banana','grape']
const result10 = fruits9.reverse()//return new array//do in original array
console.log(result10);//['grape','banana','pineapple','orange','mango','apple']

//sort
const animals2 =['dog','Cat','bird','Fish']
const result11 = animals2.sort()//return new array//dfo in original array
console.log(result11);//['Cat','Fish','bird','dog']
//sort number
const num2 =[5,1,10,1000,2,3,4]//
num2.sort((a,b) => a-b)//return new array//do in original array//return [1,2,3,4,5,10,1000]
console.log(num2);

//sort 
const persons = [
    { id: 1, fullname: 'Susan Jo' },
    { id: 3, fullname: 'John Lee' },
    { id: 2, fullname: 'ann Smith' }
  ]
  //return sorted array by fullname (ascending order and ignore case)
  //[ { id: 2, fullname: 'ann Smith' },   { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },]
// persons.sort((a,b) => {
//   return a.fullname.localeCompare(b.fullname)
// })
// console.log(persons);
const sortignorecase = person.sort((a, b) => {
  if (a.fullname.toUpperCase() < b.fullname.toUpperCase()) {
      return -1
  } else if (a.fullname.toUpperCase() > b.fullname.toUpperCase()) {
      return 1
  } else return 0
})

console.log(sortignorecase)
//join 
const animals3 =['dog','Cat','bird','Fish']
const resultss = animals3.join()
console.log(resultss);
//Provides a list of users who have access to certain pages in the application. 
//Use some to check whether the logged in user has permission to access a given page.
const userRoles = ["user", "editor", "admin"];
const allowedRoles = ["editor", "admin"];

const hasPermission = userRoles.some(role => allowedRoles.includes(role));

console.log(hasPermission); // true


