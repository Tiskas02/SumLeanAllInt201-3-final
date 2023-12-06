const validateUsername = (username) => {
    if (!username) {
        return false
    }
  const userArr = [...username]
  const checkDigit = '1234567890'
  const checkSpacial = '@#$%^&\*!'
  const userUpper = username.toUpperCase().split('').filter((x)=> !checkSpacial.includes(x))
  const userLower = username.toLowerCase().split('').filter((x)=> !checkSpacial.includes(x))
  const storeCheck =[false,false,false,false,false]
  userArr.forEach(x =>{
    if (userArr.length > 5) {
        storeCheck[0] = true
    }
    if (userUpper.some(Upper => Upper === x)) {
        storeCheck[1] = true
    }
    if (userLower.some(Lower => Lower === x)) {
        storeCheck[2] = true
    }
    if (checkDigit.split('').some(Digit => Digit === x)) {
        storeCheck[3] = true
    }
    if (!checkSpacial.split('').some(Spacial => Spacial === x)) {
        storeCheck[4] = true
    }
  })
  return storeCheck.every(x => x)
};
const validateEmail = (email) => {
    const storeCheck =[false,false]
    if(!email){
        return false
    }
    
    if (email.endsWith(".com")) {
        storeCheck[0] = true
    }
    const emailArr = [...email]
    const checkSpacial = '@'
    emailArr.forEach(x =>{
        if (checkSpacial.split('').some(at => at === x)) {
            storeCheck[1] = true
        }
    })
    return storeCheck.every(x => x)
};
const validatePassword = (password) => {
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
};

export { validateEmail, validatePassword, validateUsername };


