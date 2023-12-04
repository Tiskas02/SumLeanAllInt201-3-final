//3.create object using class
//javascript is a prototype-based language , not class based language 
// (syntactic sugar)
class Circle{
    constructor(r){
        this.radius = r
    }
    area(){
        return `the radius of ${this.radius} is : ` + Math.PI * Math.pow(this.radius,2)
    }
    getRadius(){
        return this.radius
    }
}
//create object by class Circle
const c1 = new Circle(5)
const c2 = new Circle(10)
const c3 = new Circle(15)
console.log(c1.area());
console.log(c2.area());
console.log(c3.area());
console.log(c1.getRadius());
console.log(c2.getRadius());
console.log(c3.getRadius());
console.log(Object.prototype.isPrototypeOf(c1));//true//c1 is object
console.log(Circle.prototype.isPrototypeOf(c1));//true//c1 is Circle

//constructer function
function Person(id,fn,ln) {
    this.id = id 
    this.firstname = fn
    this.lastname = ln
}
const p1 = new Person(65130500000,'Somchai','SudLor')
//object.create

const pp1 = Object.create(p1)
console.log(pp1);//Person{}
console.log(pp1.firstname);//Somchai
console.log(pp1.lastname);//SudLor
console.log(pp1.id);//65130500000
console.log(Object.prototype.isPrototypeOf(pp1));//true//pp1 is object
console.log(Person.prototype.isPrototypeOf(pp1));//true//pp1 is Person
pp1.hobby = ['play game','read book','watch movie']
console.log(pp1.hobby);//[ 'play game', 'read book', 'watch movie' ]
console.log(pp1);//Person{ hobby: [ 'play game', 'read book', 'watch movie' ] }
console.log(Object.keys(pp1));//[ 'hobby' ]
console.log(Object.values(pp1));//[ [ 'play game', 'read book', 'watch movie' ] ]
console.log(Objet.entries(pp1));//[ [ 'hobby', [ 'play game', 'read book', 'watch movie' ] ] ]

