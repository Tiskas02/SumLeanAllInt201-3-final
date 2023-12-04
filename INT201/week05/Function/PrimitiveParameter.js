//primitive parammeter passing
function double(a) {
  //a=m,a=5
  a = a * 2;
  return a;
}
let m = 5;
console.log(double(m));
console.log(m);

function update(a) {
  //a=n,a=memory address of because a accept array object
  a[0] = 555;
}
const n = [1, 2, 3];
console.log(update(n));
console.log(n); //[ 555, 2, 3 ]
