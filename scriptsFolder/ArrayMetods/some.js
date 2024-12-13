// -------------------------------------------------------
// Синтаксис:

// array.some(callback(element, index, array), thisArg);

// callback: Функція, яка виконується для кожного елемента масиву.
// element: Поточний елемент масиву.
// index (необов'язково): Індекс поточного елемента.
// array (необов'язково): Сам масив, на якому викликається метод.
// thisArg (необов'язково): Значення, яке буде використовуватися як this для callback.

// Особливості:
// some() зупиняється на першому елементі, який задовольняє умову.
// Метод не змінює початковий масив.
// Якщо масив порожній, повертається false.

// -------------------------------------------------------

// Приклад:

const numbers = [1, 2, 3, 4, 5];

// Перевіримо, чи є в масиві хоча б одне парне число
const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber); // true (оскільки 2 і 4 парні)

// ------------------------

const words = ['apple', 'banana', 'cherry'];

// Перевіримо, чи є слово довжиною більше 6 символів
const hasLongWord = words.some(word => word.length > 6);

console.log(hasLongWord); // false (жодне слово не перевищує 6 символів)

// ------------------------------------------------------

const products = [
    { name: 'Laptop', price: 1500, discount: 0 },
    { name: 'Smartphone', price: 800, discount: 50 },
    { name: 'Tablet', price: 600, discount: 0 },
    { name: 'Smartwatch', price: 200, discount: 0 },
  ];

const hasDiscount = products.some(function(product){
    return product.discount > 0;
})

console.log(hasDiscount)

// ------------------------------------------------------

const students = [
    { name: 'John', age: 16 },
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 17 },
    { name: 'Diana', age: 18 },
  ];

const newStudents = students.some(function(student){
    return student.age >= 18;
})
console.log(newStudents)

//-------------------------------------------------------

const testArray = [3, 7, 12, 5, 9];

const somesArray = testArray.some(function(num){
  return num > 10 && num % 2 === 0;
})

console.log(somesArray)


//---------------------------------------------

