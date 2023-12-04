const { template } = require('@babel/core');

//64130500013 Chonticha Li
function countCovidStatus(covidStatusArray) {
  //code here
  let negativeLow = 0;
  let negativeHigh = 0;
  let positiveCock = 0;
  if (covidStatusArray === null || covidStatusArray === undefined) {
    return undefined;
  } else if (covidStatusArray.length === 0) {
    return {};
  }
  for (let index = 0; index <= covidStatusArray.length; index++) {
    covidStatusArray[index] === 'negative and low risk'
      ? negativeLow++
      : covidStatusArray[index] === 'negative and high risk'
      ? negativeHigh++
      : covidStatusArray[index] === 'positive'
      ? positiveCock++
      : null;
    // if (covidStatusArray[index] === 'negative and low risk') {
    //   negativeLow++;
    // } else if (covidStatusArray[index] === 'negative and high risk') {
    //   negativeHigh++;
    // } else if (covidStatusArray[index] === 'positive') {
    //   positiveCock++;
    // }
  }

  const obj = {
    'negative and low risk': negativeLow,
    'negative and high risk': negativeHigh,
    'positive': positiveCock
  };
  for (const key in obj) {
    if (obj[key] === 0) {
      delete obj[key];
    }
  }
  return obj;
}
module.exports = countCovidStatus;
