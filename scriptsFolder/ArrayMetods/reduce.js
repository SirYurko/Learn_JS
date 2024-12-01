

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//СИНТАКСИС:

//  array.reduce(function(accumulator, currentValue, currentIndex, array) {
//       // Тіло функції 
//  }, initialValue);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// accumulator — це значення, яке накопичує результат на кожному кроці. 
//Це початкове значення буде використовуватись у першій ітерації (якщо задано initialValue).

// currentValue — це поточний елемент масиву на кожній ітерації.

// currentIndex (необов'язково) — це індекс поточного елемента.

// array (необов'язково) — сам масив, який проходить метод reduce().

// initialValue (необов'язково) — значення, яке буде використано як початкове для accumulator

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Задача: визначити суму чисел

const testNumbers = [1, 2, 3, 4, 5]

const sum1 = testNumbers.reduce(function(accumulator, currentValue, index){ // створюємо новий масив sum...
    // ... і в функцію вказуємо параметри accumulator, curentValue
    return accumulator + currentValue; // Додаємо поточне значення до накопиченого
}, 0) // Початкове значення для accumulator — 0


// Покроково як відбувається обчислення
// "1)" перше число 0 яке собою представляє початкове значення, 
// тобто те що ми зазначили після функції називається initialValue
//  тобто перше значення для accumulator (глянь в синтаксис)
// до нього додаємо curentValue - тобто поточний елемент масиву;
// "2)" перше число 1 яке собою представляє accumolator до якого ми добавляємо
// поточний елемент масиву (curentValue)

// 1) 0 + 1 = 1

// 2) 1 + 2 = 3

// 3) 3 + 3 = 6

// 4) 6 + 4 = 10

// 5) 10 + 5 = 15

// console.log(sum1);
//-----------------------------------------------------------------------------
//Задача: знайти середнє арифметичне масиву
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce(function(accumolator, currentValue){
   return (accumolator + currentValue); // взнаємо суму всіх чисел
}, 0)
// 150 сума всіх чисел
const middleNum = sum / numbers.length; // створюємо змінну, і рахуємо середнє число

// console.log(middleNum) // Виведе середнє значення (як ціле число)