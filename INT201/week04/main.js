let someone = ''; //someone is empty string
let who; //who is undefined
let discount = 0;
let x = 5;
console.log(typeof someone); //string; //undefined
if (someone) who = 'member';
//implesit conversion to boolean//someone is empty string so it is false
else who = 'guest';
//if more than 2 condition use block scope
if (someone) {
  let x = 1; //block scope
  console.log(x); //1
  who = 'member';
  discount = 0.1;
} else {
  let x = 2; //block scope
  console.log(x); //2
  who = 'guest';
  discount = 0.05;
}
console.log(x); //5
console.log(who); //guest
console.log(discount); //0.05
//conditional operator:? if else with expression
let we = someone ? 'member' :Math.random()*6+4+5; //someone is empty string so it is false
console.log(we); //guest
