//if-else
let score = 50;
let grade;
//<=40 =>'F', 41-50=>'D', 51-60=>'C', 61-70=>'B', 71-80=>'A', 81-100=>'A+'
if (score < 0 || score > 100) {
  grade = 'Invalid score';
} else {
  if (score <= 40) grade = 'F';
  else if (score <= 50) grade = 'D';
  else if (score <= 60) grade = 'C';
  else if (score <= 70) grade = 'B';
  else if (score <= 80) grade = 'A';
  else if (score <= 100 && score < 101) grade = 'A+';
}
console.log(grade);
//switch-case
function getGradeMeaning(grade) {
let gradeMeaning ='';
switch (grade) {
  case 'F':
    gradeMeaning += 'Need to improve';
    break;
  case 'D':
    gradeMeaning += 'Need to improve';
    break;
  case 'C':
    gradeMeaning += 'good';
    break;
  case 'B':
    gradeMeaning += 'very good';
    break;
  case 'A':
    gradeMeaning += 'best';
    break;
  case 'A+':
    gradeMeaning += 'excellent';
}
return gradeMeaning;
}
console.log(getGradeMeaning(grade));

let ch = '0';
let isVowel = false;
switch (ch) {
  case 'A':
  case 'a':
  case 'E':
  case 'e':
  case 'I':
  case 'i':
  case 'O':
  case 'o':
  case 'U':
  case 'u':
    isVowel = true;
}
console.log(isVowel);
//result is true

for (let index = 0; index < 10; index++) {
  console.log(index);
}
//for-of(use with array(iterable object))
let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //block scope
  console.log(num);
}
//for-in (use with object data type)
let obj = { name: 'John', age: 25 };
for (const key in obj) {
  console.log(key, obj[key]);
  console.log(`${key} : ${obj[key]}`);
}
