const salesArray = [
  [100, 150, 200, 180, 220], // Sales for Product A
  [120, 100, 90, 110, 95], // Sales for Product B
  [80, 70, 60, 90, 100], // Sales for Product C
]
function getTotalSales(...arrays) {
  const arr = [...arrays]
  const arrFlat = arr.flat(1)
  let sums = [0, 0, 0, 0, 0]
  for (let i = 0; i < 5; i++) {
    for (const iterator of arrFlat) {
        sums[i % 5] += iterator[i];
    }
  }
  return sums.forEach((value, index) => {
    console.log(`sum each day ${index+1}: ${value}`);
  });
}

function getAverageSalesPerDay(salesArray){
    let sums = [0, 0, 0, 0, 0]
    for (let i = 0; i < 5; i++) {
      for (const iterator of salesArray) {
          sums[i % 5] += iterator[i];
      }
    }
    return sums.forEach((value, index) => {
      console.log(`Aveage each day ${index+1}: ${value/sums.length}`);
    });
}

function getDaysWithSalesAboveThreshold(salesArray, threshold) {
    let sums = [0, 0, 0, 0, 0]
    for (let i = 0; i < 5; i++) {
      for (const iterator of salesArray) {
          sums[i % 5] += iterator[i];
      }
    }
    return sums.forEach((value, index) => {
      if (value > threshold){
        console.log(`More than threshold each day ${index+1}: ${value}`)
      }
    });
}
function findMaximumSalesDay(salesArray) {
    let sums = [0, 0, 0, 0, 0]
    for (let i = 0; i < 5; i++) {
      for (const iterator of salesArray) {
          sums[i % 5] += iterator[i];
      }
    }
    let reciveData =[0,0]
    sums.forEach((value, index) => {
        if (value > reciveData[1]){
          reciveData[0] = index
          reciveData[1] = value
        }
      });
    return console.log(`MaxSaleday is  ${reciveData[0]}: ${reciveData[1]}`) 
}
getTotalSales(salesArray);
getAverageSalesPerDay(salesArray);
getDaysWithSalesAboveThreshold(salesArray,350);
findMaximumSalesDay(salesArray)