let a = 1 //global scope
function x(m) {
  let a = 555 //shadowing //function scope
  let b = 2
  function y(n) {
    let c = 3
    console.log(`a: ${a}, m: ${m}, b:${b}, n:${n}, c:${c}`)
    function z(o) {
      let d = 4
      console.log(`a: ${a}, m: ${m}, b:${b}, n:${n}, c:${c}, o:${o}, d:${d}`)
    }
  }
  console.log(`a: ${a}, m: ${m}, b:${b}`) //a: 555, m: 100, b:2
  return y
}
console.log(`a:${a}`) //a:1
x(100)
// y() // cannot access
// z() //cannot access
const yfn = x(100)
yfn(888) //a: 555, m: 100, b:2, n:888, c:3