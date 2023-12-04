// Given a list of directions to spin, "left" or "right", return an integer of how many full 
// 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.
// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
const rotate = ["right", "right", "right", "right", "left", "right"];
// function spint(rotates){
//     let Collect = 0
//     for (const allrotate of rotates) {
//         if (allrotate === "right"){
//             Collect += 90
//         }else{
//             Collect -= 90
//         }
//     }
//     return Math.floor(Math.abs(Collect)/360)
// }
// console.log(spint(rotate));
function spinAround(turns) {
    let l = turns.filter(e => e=='left').length;
    console.log(l);
    let r = turns.filter(e => e=='right').length;
    console.log(r);
    return Math.floor(Math.abs(l-r)*0.25);
  }
console.log(spinAround(rotate));

function spinAround(turns) {
    let t = 0
    for(let x of turns){
      t += x == "left" ? -1 : 1
    }
    return Math.floor(Math.abs(t) / 4)
  }