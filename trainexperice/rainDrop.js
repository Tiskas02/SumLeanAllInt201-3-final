function rainDrop(Number){
    let storeNum = []
        if (Number % 3 == 0){
            storeNum.push('Pling');
        }
        if (Number % 5 == 0){
            storeNum.push('Plang');
        }
        if (Number % 7 == 0){
            storeNum.push('Plong');
        }   
    return storeNum.join('') 
}
console.log(rainDrop(15));




// function rainDrop(Number){
//     let Numcheck = Number;
//     let store = '';
//     if(!Numcheck){
//         return Numcheck;
//     }
//     if (Numcheck % 3 == 0 && Numcheck % 5 == 0 && Numcheck % 7 == 0) {
//          store += 'PlingPlangPlong';
//     }
//     if(Numcheck % 3 == 0 && Numcheck % 5 == 0){
//          store += 'PlingPlang';
//     } 
//     if(Numcheck % 5 == 0 && Numcheck % 7 == 0){
//          store += 'PlangPlong';
//     }
//     if(Numcheck % 3 == 0 && Numcheck % 7 == 0){
//          store += 'PlingPlong';
//     }
//     if (Numcheck % 3 == 0){
//          store += 'Pling';
//     }
//     if (Numcheck % 5 == 0){
//          store += 'Plang';
//     }
//     if (Numcheck % 7 == 0){
//          store += 'Plong';
//     }
//     return store
// }
// console.log(rainDrop(7));
