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
// створення нового масива
// який містить в собі Місяці які починаються з "S"
function arrayForEachTwo(){
    let unitedMonthCopy = [];                   // оголошення змінної для зберігання місяців
    unitedMonth.forEach(function(month){        // викликаємо метод forEach>створюємо функцію для кожного місяця з масива
        if(month.startsWith("S")){              // якщо перше буква починається з "S"      
            console.log(month);                 // виводить це слово в консоль
            unitedMonthCopy.push(month);        // та добавляє в змінну яку створили раніше
        }
    })
console.log(unitedMonthCopy)                    // виводимо масив в консоль
}