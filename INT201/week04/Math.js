//ceill
console.log(Math.ceil(1.4)); //2
console.log(Math.ceil(1.5)); //2
console.log(Math.ceil(1.6)); //2
console.log(Math.ceil(-1.4)); //-1
console.log('------------------');
//floor
console.log(Math.floor(1.4)); //1
console.log(Math.floor(1.5)); //1
console.log(Math.floor(1.6)); //1
console.log('------------------');
//round
//equal to or more than 0.5 round up ,otherwise round down
console.log(Math.round(1.4));
console.log(Math.round(1.5));
console.log(Math.round(1.6));
console.log('------------------');
//pow Math.pow(base,exponent)
console.log(Math.pow(2, 3)); //2*2*2=8
console.log('------------------');
//PI
console.log(Math.PI); //3.14*
console.log('------------------');
//sqrt
console.log(Math.sqrt(4)); //2
console.log('------------------');
//ranmdom
console.log(Math.random()); //random 0-1 //0.0-0.9999999999999
//random Dice 1-6
let rand = Math.floor(Math.random() * 6) + 1; //0.0-0.9999999999999*6+1=1-6
console.log(rand);
//random 10-50
rand = Math.floor(Math.random() * 41) + 10; //0.0-0.9999999999999*41+10=10-50 //0-40 //10-50
console.log(rand);
//random 100-1000
rand =Math.floor(Math.random() * 901) + 100; //0.0-0.9999999999999*901+100=100-1000 //0-900 //100-1000
//random in a range 1 -100
let min = 1
let max = 100
let rand4 = Math.floor(Math.random()*(max-min+1))+ min
// console.log(rand4)
// 1.Math.random() -> 0 -0.999999999*
// 2.No.1 * 100 ->0 - 0.999999*
// 3.Math.floor(No.2) -> 0 - 99
// 4.No.3 + min => 1-100


//fuction must be have 1 perpose 
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rand1 = randomNumber(1, 6);
let rand2 = randomNumber(1, 100);
let rand3 = randomNumber(1, 1000);
console.log(rand1);
