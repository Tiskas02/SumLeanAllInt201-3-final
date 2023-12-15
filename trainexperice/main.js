function createCounter() {
    let count = [];
    return {
      increment: function() {
        count.push('kuy');
      },
      decrement: function() {
        count.pop();
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  let counter = createCounter();
  
  counter.increment();
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); // Output: 3
  
  counter.decrement();
  console.log(counter.getCount()); // Output: 2

  let arr = ['']
  arr = arr ?? [1,2]
  console.log(arr?.length);

function x(y){
    return y
}

function doIt(){
   console.log('do it')
}

console.log(x(doIt));
const [...x2] = ['a','e','i','o','u']
console.log(x2);
