//constructer function
function Person(id,fn,ln) {
    this.id = id 
    this.firstname = fn
    this.lastname = ln
}
// create object by constructor function
const p1 = new Person(65130500000,'Somchai','SudLor')
const p2 = new Person(65130500001,'Somchai2','SudLor2')
const p3 = new Person(65130500002,'Somchai3','SudLor3')
console.log(p1);
console.log(p2);
console.log(p3);
p1.email = 'Somchai@email.com'
console.log(p1);//add new property
// Object prototype <- Person prototype <- p1(instance of Person,object)
console.log(Object.prototype.isPrototypeOf(p1));//true//p1 is object
console.log(Person.prototype.isPrototypeOf(p1));//true//p1 is Person
console.log(p2);//not same property
console.log(p3);//not same property