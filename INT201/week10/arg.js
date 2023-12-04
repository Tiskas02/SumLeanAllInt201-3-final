function ops(n1,n2,...n3){//formal parameters//argument[0]=n1//...n3 rest if sent more than parameter it control n3
    console.log(arguments.length);
    arguments[0] = 555
    console.log(n1);
    for (const argu of arguments) {
        console.log(argu);
    }
}
ops(1,true,'puuty')
ops(1,true,'puuty','afdasf')//actual parameter

function sum(...nums){
    return nums.reduce((total,current) => total + current,0)
}
console.log('result : ' +sum(1,2,3,4,5,6,7,8,9,10));