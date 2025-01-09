/* eslint-disable */

const user = {
    name: "Oleksii",
    age: 25,
    city: "Kyiv"
};


const keys = Object.keys(user);

// console.log(keys) // виведе масив ключів з об'єкта

//- - -- - - - - - -- - - - -- - - - - - - - - - - - -

// const product = {
//     id: 101,
//     name: "Laptop",
//     price: 1500
//   };

// Object.keys(product).forEach(key => {
//     console.log(`${key}: ${product[key]}`);
// })

// - - - - - - -- - - - - - - - - - - - - -- - -- - -- -

// forEach

const products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 700 },
    { name: "Tablet", price: 400 }
  ];

let totalPrice = 0;
products.forEach(product =>{
    totalPrice += product.price; 
    // console.log(`Product: ${product.name}, price: ${product.price}`)
})
// console.log("Total price: " + totalPrice)

// - -- - - - -- -- - - - - - - - - - -- - - - - -- -- - - 

/* Опис задачі:
Ми маємо об'єкт studentGrades, який містить оцінки студента з різних предметів. Ти повинен:

Використовуючи метод Object.keys(), отримати масив ключів об'єкта (предметів).
Ітеративно пройти по кожному ключу за допомогою методу forEach().
Для кожного предмета отримати оцінку, використовуючи доступ через ключ (studentGrades[subject]).
Вивести в консоль назву предмета та відповідну оцінку.
Підрахувати суму всіх оцінок і обчислити середнє значення.
Вивести середню оцінку в консоль.
Алгоритм:
Створюється змінна totalGrade для збереження суми оцінок.
Використовується Object.keys(studentGrades), щоб отримати масив усіх предметів.
За допомогою forEach() ми ітеруємо по кожному предмету, додаючи його оцінку до totalGrade і виводячи інформацію про предмет.
Після завершення циклу обчислюється середнє значення оцінок, яке виводиться в консоль.
*/
const studentGrades = {
    math: 85,
    english: 78,
    science: 92,
    history: 88
};

let totalGrades = 0;

Object.keys(studentGrades).forEach(subject => {
    const grade = studentGrades[subject];
    totalGrades += grade;
    // console.log(`Subject: ${subject}, ${grade}`);
});

// console.log("Total Grades: " + totalGrades)

//- -- -- - - - - -- - - - - - - - - -- - - - - - 

const inventory = {
    apples: 50,
    bananas: 120,
    oranges: 0,
    grapes: 75,
    pineapples: 0
  };

let TotalQuantity = 0;

Object.keys(inventory).forEach(frut => {
    const quantity = inventory[frut];
    if(quantity > 0){
        console.log(`Product: ${frut}, Quantity: ${quantity} `)
        TotalQuantity += quantity;
    }
    
});

console.log("Total Quantity: " + TotalQuantity)
