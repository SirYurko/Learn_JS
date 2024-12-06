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

console.log(everyProducts)