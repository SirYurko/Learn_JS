// Синтаксис об'єктів
// let user = new Object(); // синтаксис "конструктора об’єктів"
// let user = {};  // синтаксис "літералу об’єкта"

// let user = {     // об’єкт
//     name: "Іван",  // за ключем "name" зберігаємо значення "Іван"
//     age: 30        // за ключем "age" зберігати значення "30"
//   };


// Для звернення до властивостей використовується запис через крапку:

// // отримаємо значення властивостей об’єкта:
// alert( user.name ); // Іван
// alert( user.age ); // 30

// let user = {
//     name: "Oleksii",
//     age: 22,
//     admin: true,
//     "likes birds": true,  // Ім’я властивості з декількох слів повинно бути в лапках

// }

// console.log(user) // виводимо об'єкт в консоль
// delete user.admin // видаляємо властивість admin в об'єкті User
// console.log(user) // виводить об'єкт без властивості admin

// user["Любить птахів 1"] = true;  //якщо ім'я властивості містить більше двох слів, 
// // звертання до властивості відбувається не через крапку, а через квардратні дужки

// console.log(user)

// //-----------------

// let key = "любить птахів 2";

// // так само, як user["любить птахів"] = true;
// user[key] = true;

// console.log(user)

//------------------------------

// Тут змінна key може бути обчислена під час виконання або залежатиме від вводу користувача.
// І тоді ми використовуємо його для доступу до властивості. Це дає нам велику гнучкість.

// let user = {
//     name: "Іван",
//     age: 30
//   };
  
//   let key = prompt("Що ви хочете знати про користувача?", "name");
  
  // доступ до властивості через змінну
//   alert( user[key] ); // Іван (якщо ввести "name")


//   Запис «через крапку» такого не дозволяє:

//   let user = {
//     name: "Іван",
//     age: 30
//   };
  
//   let key = "name";
//   alert( user.key ) // undefined
//-----------------------------------


// let fruit = prompt("Які фрукти купити?", "apple");

// let bag = {
//     [fruit]: 5,
// };

// alert( bag.apple );
//-----------------------------------
// task 
// Привіт, object
// важливість: 5
// Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.
// рішення

// let user = {};

// user.name = "Іван";
// user.surname = "Сміт";
// user.name = "Петро";
// delete user.name

//-------------------------------------

// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.

// Має так працювати:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "Вставай";

// alert( isEmpty(schedule) ); // false



// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// for...in — підходить для простих перевірок і сумісний зі старими браузерами.
// Object.keys() — більш сучасний підхід, читається простіше і дозволяє використовувати інші методи масивів, якщо потрібно.

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
//   }

//----------------------------------------

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// // console.log(salaries.John + salaries.Ann + salaries.Pete)

// // або 

//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   alert(sum); // 390

//----------------------------------------
// 
// пройтись ще раз по задачкам

// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
//   };

// console.log(multiplyNumeric(menu));

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }


// console.log(multiplyNumeric(menu));

//------------------------------------------

//practice
//task 1
/*
let user = {
  name: "Олександр",
  age: 25,
  isAdmin: false,
}

console.log(user)
*/

//task 2
/*
let car = {
  brand: "Toyota",
  model: "Corolla",
}

car.year = 2020;

delete car.model;

console.log(car)

*/

//task3

// Завдання 3: Обчислювані властивості
// Напиши код, який запитує у
// користувача назву властивості та її значення, а потім додає цю властивість 
// до об’єкта product. Початковий об’єкт виглядає так:
/*
let product = {
  name: "Laptop",
  price: 1500
};

let dreamPrice = prompt("Введіть бажану ціну")

product['dreamPrice'] = dreamPrice;    // назву ключа в лапки, значення після дорівнює

console.log(product)
*/
//task4
// Завдання 4: Перевірка властивості
// Створи об’єкт book із властивостями:

// title — "JavaScript for Beginners".
// author — "John Doe".
// Перевір, чи існує властивість price у цьому об’єкті. Якщо властивість відсутня, додай її зі значенням 500.
/*
let book = {
  title: "JavaScript for Beginners",
  author: 'John Doe',
}

if(!('price' in book)){
  book.price = 500;
} 

console.log(book)
*/
/*
//task5
let person = {
  firstName: "Іван",
  lastName: "Петренко",
  age: 30,
  isEmployed: true
};

function showKeyValue(){
  for(let key in person){
    console.log(key + " : " +  person[key])
  }
}
showKeyValue()
*/

//Завдання 6: Підрахунок властивостей
// Напиши функцію countProperties(obj), яка приймає об’єкт і повертає кількість його властивостей.
// Перевір функцію на об’єкті:
/*
let city = {
  name: "Київ",
  population: 3000000,
  country: "Україна"
};

function countProperties(obj){
  return Object.keys(obj).length;
}

console.log(countProperties(city))
*/
//task7
// Об'єднання об'єктів

let user = {
  name: "Оля",
  age: 28
};

let additionalInfo = {
  isAdmin: true,
  country: "Україна"
};

const newArray = [...Object.keys(user), ...Object.keys(additionalInfo)]; 

console.log(newArray)