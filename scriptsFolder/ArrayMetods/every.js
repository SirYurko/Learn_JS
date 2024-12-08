// Синтаксис:

// array.every(callback(element, index, array), thisArg);

// callback: Функція, яка виконується для кожного елемента масиву.
// element: Поточний елемент масиву.
// index (необов'язково): Індекс поточного елемента.
// array (необов'язково): Сам масив, на якому викликається метод.
// thisArg (необов'язково): Значення, яке буде використовуватися як this для callback.

// Особливості:
// every() зупиняється, якщо знайде перший елемент, який не задовольняє умову.
// Якщо масив порожній, метод повертає true.
// Метод не змінює початковий масив.

const products = [
    { name: 'Laptop', price: 1500 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 600 },
    { name: 'Smartwatch', price: 200 },
  ];


const everyProducts = products.every(function(product){
    return product.price >= 100;
})

// console.log(everyProducts)

//-----------------------------------------------------

const testArray = [6, 7, 8, 9];
const everyTestArray = testArray.every(function(num){
  return num > 5;
}) 

// console.log(everyTestArray)

const testArray2 = [4, 6, 7];

const everyTestArray2 = testArray2.every(function(num){
  return num > 5;
})

// console.log(everyTestArray2)

//---------------------------------------------------