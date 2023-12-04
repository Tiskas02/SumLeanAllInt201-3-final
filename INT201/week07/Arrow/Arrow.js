//fuction declaration , name function
function sum(n1,n2){
    return n1+n2;
}
//fucltion expression , anonymous function
const sum2 = function(n1,n2){//can give to sum2 because it is a function is first class citizen
    return n1+n2;
}
//function expression , names function
const sum3 = function sumfn(n1,n2){//can give to sum2 because it is a function is first class citizen
    return n1+n2;
}
//arrow function , anonymous function
const sum4 = (n1,n2) => n1+n2;//if only one line can use this
//if u have {} u have to use return
const sum5 = (n1,n2) => {
    return n1+n2;
}
console.log(sum(1,2));
console.log(sum2(1,2));
console.log(sum3(1,2));
console.log(sum4(1,2));
console.log(sum5(1,2));
