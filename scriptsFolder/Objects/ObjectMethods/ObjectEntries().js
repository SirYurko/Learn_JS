/* eslint-disable */
//- - - - -- - - - --- - -- - - --- - - - -- - -


// Простий об'єкт

const user = {
    name: "Oleksii",
    age: 25,
    isDeveloper: true,
};

// console.log(Object.entries(user))

// - - - - - - - - - - - - - - - - - - - - - -

//Ітерація за допомогою for...of

for (const [key, value] of Object.entries(user)) {
    // console.log(`${key}, ${value}`);
}

//--- - - - - - - -- - -- - -- -- -- -- - - - -- - 

// Використання з методами масивів

const prices = {
    apple: 50,
    banana: 30,
    cherry: 20
};

const doubledPrices = Object.entries(prices).map(([key, value]) => [key, value * 2]); // створює новий масив пар, де кожне значення value помножете на 2

// console.log(Object.fromEntries(doubledPrices))  // Object.fromEtries() - повертає масив пар назад в об'єкт

// -- - - - -- - - - - - - - -- - - - - - - - - -- - -

//task  знайди ім'я студента з найвищою оцінкою.

const students = {
    Oleksii: 85,
    Maria: 92,
    Ivan: 76,
    Anna: 88
  };

let newArray = [];
let result = 0;
const arrayStudents = Object.entries(students); // Перетворюємо об'єкт students у масив пар [ключ, значення]

for (const [key, value] of arrayStudents){
       // Починаємо цикл для перебору кожної пари [ім'я, оцінка]
    newArray.push(value); // Додаємо поточну оцінку до масиву newArray
    
    if(value > result) { // Якщо поточна оцінка більша за збережену в result
        result = value;
    }
}

console.log(newArray);
console.log(result)