//fuction Declaration
function concat(str, str2) {
  return str + str2;
}
//calling function ,execute function
console.log(concat('hello', 'world')); // helloworld
//2.fuction expression
const toLower = function (str) {
  return str.toLowerCase();
};
//calling function,execute function
console.log(toLower('HELLO'));

const doSomeThing = toLower;
console.log(doSomeThing('HI'));//hi
console.log(typeof doSomeThing);//function
const y = toLower('HEY');//hey
console.log(y);//hey
console.log(typeof y);//string

const doIt=function(op,str1,str2){
    //parameter passing
    //op=concat,str1='good',str2='morning'
    return op(str1,str2)
}
console.log(doIt(concat,'good','morning'));//'goodmoring'
console.log(doIt(toLower,'GOOD','MORNING'));//'good'

function a(){// higher order function
    return toLower
}
console.log(a);
const m =a()
console.log(m('ABC'));
