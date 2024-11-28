import  unitedMonth  from './array.js';

// Синтаксис forEach

// months.forEach(function(month, index) {
//     console.log(`Місяць ${index + 1}: ${month}`);
//   });
console.log(unitedMonth);
function arrayForEachOne(){
    let totalLength = 0;
    unitedMonth.forEach( function (month, index){
        console.log(`Місяць ${index + 1}: ${month}`);
        console.log(month.length);
        totalLength += month.length;
    });
    console.log("Загальна кількість символів: " + totalLength)    
}

// -------------------------------------------

// ДОПРАКТИКУВАТИ
// function arrayForEachTwo(){
    unitedMonth.forEach(function(month, index){
        console.log(` ${index + 1} ${month}, `)
    })


