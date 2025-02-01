/*eslint-disable*/

let fruits = ["Яблуко", "Апельсин", "Слива"];

// alert( fruits.at(-3)) // Яблуко
// alert( fruits.at(-1)) // Слива

fruits.push('Ананас') // додав елемент в кінці
fruits.pop() // видалив елемент в кінці
  
fruits.unshift('Груша') // додав елемент на початку
fruits.shift(); // видалив елемен на початку

// console.log(fruits)

// Внутрішня структура масивів

let fruits2 = ['Banana'];
let arr = fruits2; // копіює посилання (дві змінні посилаються на один масив)

// alert(arr === fruits2 ) // true

arr.push('some fruit') // зміна масиву за посиланням

// alert (fruits2) // "Banana", "some fruit" -- наразі два елемента

//- - - ------- ----  -- 

let fruits3 = [];

fruits3[99999] = 5; // створюємо властивість, індекс якої набагато перевищує довжину масиву

fruits3.age = 25; // створюємо властивість з довільним ім'ям

// console.log(fruits3)