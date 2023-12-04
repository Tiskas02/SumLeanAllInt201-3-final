// 1.create object by object literal
const st1 = { studentId : 65130500000, firstname : 'Somchai' ,lastname : 'SudLor' ,studentId : 65130500002};//retake the last one
console.log(typeof st1);
console.log(st1);
const st2 = {} //empty object === const st2 = new Object()
console.log(typeof st2);
//use method key get key
console.log(Object.keys(st1));// array of properties keys
console.log(Object.values(st1));// array of properties values
// object literal Limitations
const st3={ studentId : 65130500111, firstname : 'Somsri' ,lastname : 'Sudjai' }
//composite object(object in object) : address object nested in st4 object
const st4 ={ 
    studentId : 65130500113, firstname : 'Somsr2i' ,
    lastname : 'Sudj343ai' ,
    address : { street : 'Rama 2' , city : 'Bangkok' },
    // getFullname : function(){ 
    //     return `${this.firstname}` + ' ' + `${this.lastname}` 
    // } 
    getFullname() {//remove : function()
        return `${this.firstname}` + ' ' + `${this.lastname}`
    }
}
console.log(st4);
console.log(st4.address);
console.log(st4.address.street);
console.log(st4.address.city);
console.log(st4['address']['city']);//dynamic key
//get property 1) objectname.propertyname 2) objectname['propertyname']
console.log(st4.firstname);
console.log(st4['firstname']);//dynamic key
//dynamic property : add new one,update or delete existing property
st4.email = 'poenchai@gmail.com';//add a new property 
st4.firstname = 'Poenchai';//edit property value
delete st4.email;//delete property

st4.getAddress = function () {
    return `${this.address.street} ${this.address.city}`;
}
console.log(st4);
console.log(Object.prototype.isPrototypeOf(st4));//true//st4 is object
console.log(Object.prototype.isPrototypeOf(st2));//true//st2 is object
console.log(Date.prototype.isPrototypeOf(st4));//false//st4 is not date
console.log(st4.getFullname());
//property key can store function
const st5 ={ studentId : 65130500555, firstname : 'pipi' ,lastname : 'pivarana',getFullname : function(){ return `${this.firstname}` + ' ' + `${this.lastname}` } }
console.log(st5.getFullname());