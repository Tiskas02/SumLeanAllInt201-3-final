// Write your student id, firstname, and lastname in a single line comment here
//65130500078
function isPasswordValid(password) {
    //write your code here...
  if (!password){
    return false
  }
  const passwordArr = [...password]
  const passwordDigit = '1234567890'
  const passwordSpecial ='@#$%^&\*!'
  const passwordSpecialNum ='@#$%^&\*!1234567980'
  const passwordUpper = password.toUpperCase().split('')
  const passSplitUpper = passwordUpper.filter(x => !passwordSpecialNum.includes(x))
  const passwordLower = password.toLowerCase().split('')
  const passSplitLower = passwordLower.filter(x => !passwordSpecialNum.includes(x))
  const storeData = [false,false,false,false,false]
  passwordArr.forEach(char => {
    if(passwordArr.length >= 8){
      storeData[0] = true
    }
    if(passSplitUpper.some(UpperChar => UpperChar === char)){
      storeData[1] = true
    }
    if (passSplitLower.some(LowerChar => LowerChar === char)) {
      storeData[2] = true
    }
    if (passwordDigit.split('').some(Digit=> Digit === char)) {
      storeData[3] = true
    }
    if (passwordSpecial.split('').some(Digit=> Digit === char)) {
      storeData[4] = true
    }
  });
  return storeData.every(x => x)
 
}
console.log(isPasswordValid('Ajl@4'));


module.exports = isPasswordValid
