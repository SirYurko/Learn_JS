import  unitedMonth  from './array.js';

// Синтаксис forEach

// months.forEach(function(month, index) {
//     console.log(`Місяць ${index + 1}: ${month}`);
//   });
console.log(unitedMonth);
function arrayForEachOne(){
    let totalLength = 0; // створюємо змінну в яку будемо записувати кількість символів в місяцях !за межами функції!
    unitedMonth.forEach( function (month, index){   // викликаємо метод forEach>створюємо функцію для кожного місяця з масива та індекс
        console.log(`Місяць ${index + 1}: ${month}`); // виводить в консоль "Текст ${індекс масиву} ${місяць масиву}" "в стовпчик"
        console.log(month.length); // виводить довжину кожного слова в масиві
        totalLength += month.length; // в змінну totalLength додаємо кількість символів з кожного місяця
    });
    console.log("Загальна кількість символів: " + totalLength)    // виводимо результат !за межами функції!
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