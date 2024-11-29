import  unitedMonth  from './array.js';

// Синтаксис forEach

// months.forEach(function(month, index) {
//     console.log(`Місяць ${index + 1}: ${month}`);
//   });
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
// --------------------------------------------------------------------------------
// Задача, об'єкт в масиві, потрібно взнати загальну вартість продуктів
const products = [              // маємо масив об'єктів
    { name: "Apple", price: 15 },
    { name: "Banana", price: 10 },
    { name: "Cherry", price: 20 },
    { name: "Date", price: 25 }
];
let totalPrice = 0;                     //створюємо змінну в яку будемо додавати ціни
products.forEach(function(product){     // викликаємо метод forEact і в функції зазначаємо product кожен елемент масиву
    console.log(`Product: ${product.name}, Price: ${product.price}`) // виводимо ім'я та ціну
    totalPrice += product.price;   // додаємо до змінної ціну кожної позиції
})

console.log("Загальна сума: " + totalPrice) // виводимо в консоль