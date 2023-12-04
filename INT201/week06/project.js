class Person{
    constructor(firstname,lastname,dateOfBirth){
        this.firstname = firstname
        this.lastname = lastname
        this.dateOfBirth = dateOfBirth
    }
    getFullname() {
        return `${this.firstname} ${this.lastname}`
    }
    isEquals(anotherPerson) {
        return (
            this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&//check firstname and lastname compare by &&
            this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase() 
        )
    }
    getAge (){
        const currentDate = Date.now()
        const birthDate = this.dateOfBirth.getTime()
        const diffMilli = currentDate - birthDate
        const diffDate = new Date(diffMilli)
        return diffDate.getFullYear() - 19
    }
    tostring() {
        return `${this.getFullname()},${this.getAge()}`
    }
}

const p1 = new Person('Umaporn','Sup',new Date(2000,1,1))
console.log(p1.getAge());
const p2 = new Person('saksit','Sup',new Date(2001,2,4))
console.log(p1.getFullname());
console.log(p2.getFullname());//getFullname is method
console.log(p2.isEquals(p1));//false
console.log(p1.isEquals(p1));//true
console.log(p1.tostring());





