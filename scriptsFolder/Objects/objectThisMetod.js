/* eslint-disable*/
//-----------------------------------------------
// Викликаємо метод this в глобальному оточені


// const { max } = require("prelude-ls");

// console.log(this) // виведе об'єкт Window

//----------------------------------------------

// Виклик метода this в функції

// function myFunction(){
//   console.log(this);
// }
// myFunction() // також виведе Window, оскільки this ссилається на глобальне оточення

//- - - - - - - - - - - - - - - - - - - - - - - -

// function myFunction1(){
//   function myFunction(){
//     console.log(this);
//   }
//   myFunction();
// }

// myFunction1() // те саме якщо функція в функції, виведе Window

//------------------------------------------------

// Функція як метод в об'єкті

// const item = {
//   title: "Phone",
//   fullPrice: 100,
//   calculatePrice(discountPercent = 0){   // створюємо функцію(метод об'єкта) 
//     console.log(this.fullPrice - discountPercent/100 * this.fullPrice); //посилаємось за допомогою this до ціни(fullPrice)
//   }
// }
// item.calculatePrice(20);

//-----------------------------------------------

//Виклик функції з привязкою контексту

// function myFunction(){
//   console.log(this);
// }
// const item = {title: "phone"};

// myFunction.call(item)      // метод call apply, двоє методів привязують контекст
                          // та викликають функцію
// приклад

// function calcDiscount(age) {
//   if(age > 65 ){
//     console.log(this.price / 2)
//   }else console.log(this.price)  
// }
// const buy = {title: "phone", price: 1000};

// calcDiscount.call(buy, 70) // тут підходить call, бо якщо apply - то другий аргумент
                           // має бути масивом, ми можемо другий аргумент обернути в масив

//-----------------------------------------------------------------------------------

// .bind


// function calcDiscount(age) {
//   if(age > 65 ){
//     console.log(this.price / 2)
//   }else console.log(this.price)  
// }
// const buy = {title: "phone", price: 1000};

// const calcDiscountForElderly = calcDiscount.bind(buy, 70)

// calcDiscountForElderly() // все ідентичне до call АЛЕ ФУНКЦІЮ ВІН НЕ ВИКЛИКАЄ А ТІЛЬКИ
// ЗАПИСУЄ, ЩОБ ВИКЛИКАТИ ФУНКЦІЮ ПОТРІБНО ЗАПИСАТИ ФУНКЦІЮ В НОВУ ЗМІННУ

//---------------------------------------------------------------------------------

// Функція конструктор. За допомогою функції створюємо новий об'єкт

 function CreateItem(title, price){ // створюємо функцію зі властивостями об'єкта
  this.title = title;  // надаємо значення властивості об'єкта
  this.price = price;  // надаємо значення властивості об'єкта
  // console.log(this);   // виводимо в консоль this ( )
  } // Писати return this не обов'язково, оскільки функції, які викликаються зі словом new, 
  // за замовчуванням повертають створений об'єкт.
  const item1 = new CreateItem('phone', 7000); // Викликаємо функцію з new, створюючи новий об'єкт
  // Якщо прибрати new, this буде посилатися на глобальний об'єкт (window у браузері або global у Node.js),
  // що може призвести до небажаних наслідків, особливо у строгому режимі (strict mode).
  const item2 = new CreateItem('case', 1000);
  const item3 = new CreateItem('charge', 3000);

  // console.log(item1, item2, item3)
  // так ми можемо створювати велику кількість об'єктів за допомогою функції конструктора

  //---------------------------------------------------------------------------------
  
  // this в стрілкова функція

  const obj = {
    getThis1: function () {
      console.log(this);
    },
    getThis2: () => {
      console.log(this);
    },
  }

// obj.getThis1() // взяло в якості this батьківський об'єкт (obj)
// obj.getThis2() // взядл в якості this глобальний об'єкт (window)

//- -- - - -- - -- -- - -- - - - - - - - - - - - - - - - - -- - - --

const obj2 = {
  lastName: "Ivanov",
  firstNames: ['Petr', 'Ivan'],
  logFullNames: function () {
    this.firstNames.forEach(function (name) {
      console.log(`${this.lastName} ${name}`);
    })
  },
  logFullNames2: function () {
    this.firstNames.forEach((name) => {
      console.log(`${this.lastName} ${name}`);
    })
 },
};

// obj2.logFullNames()
// obj2.logFullNames2()

//-------------------------------------
// створіть калькулятор javascript.info/object-methods

// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта 
// з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.


// const calculator = {
 

//   read: function () {
//     this.a = parseFloat(prompt("Введіть перше число")); // a та b створюються динамічно, тобто їм не потрібно окремо створювати
//     this.b = parseFloat(prompt("Введіть друге число"));
//   },

//   sum: function () {
//    return this.a + this.b;
//   },

//   mul: function () {
//     return this.a * this.b;
//   }

// }

// calculator.read()

// console.log("Сума:", calculator.sum());
// console.log("Добуток:", calculator.mul());
// console.log(calculator)

// ще взяти практичних задачок

//-----------------------------------------------------
//Задача: Створити об’єкт counter

const counter = {

  read: function () {    // створюємо функцію яка буде записувати у властивість value(яке ми тут же створюємо динамічно) значення яке надав користувач
    this.value = parseFloat(prompt("Початкове значення лічильника"))
  },

  increment: function () {
    this.value = this.value + 1;
  },

  decrement: function () {
    this.value = this.value - 1;
  },

  showValue: function () {
    console.log(this.value)
  }
}

// counter.read();        // Введіть початкове значення: 5
// counter.increment();   // this.value = 5 + 1
// counter.showValue();   // Виведе: 6
// counter.decrement();   // this.value = 6 - 1
// counter.showValue();   // Виведе: 5

//--------------------------------------------------

// Задача: Створити об’єкт userProfile

const userProfile = {
  
  setName: function () {
    this.name = prompt("Яке ваше ім'я");
  },

  setAge: function () {
    this.age = parseFloat(prompt('Який ваш вік'));
  },

  incrementAge: function () {
    this.age++;
  },

  showProfile: function () {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`)
  }
}

// userProfile.setName();      // Користувач вводить, наприклад, "Олексій"
// userProfile.setAge();       // Користувач вводить, наприклад, 25
// userProfile.incrementAge(); // Збільшує вік на 1
// userProfile.showProfile();  // Виведе: "Ім'я: Олексій, Вік: 26"



const item = {
  title: "Phone",
  logTitle: function () {
      setTimeout( () => {
          console.log(`Product: ${this.title}`);
      })
  }
}

// item.logTitle()

//-------------------------------------------------

function greet(greeting) { 
  console.log(`${greeting}, ${this.name}`); 
}
const person = { name: "Alice" };
// greet.call(person, "Hello"); // Hello, Alice

//------------------------------------------------
// Завдання:
// Є об'єкти, які представляють користувачів із їхніми даними. 
// Створіть функцію, яка виводить у консоль повідомлення з ім'ям користувача
// та його віком. Використовуйте call для виклику цієї функції в контексті різних об'єктів.


// function showUserInfo(city, country) {
//   console.log(`Ім'я: ${this.name}, Вік: ${this.age}, Місто: ${city}, Країна: ${country}`);
// }

// const user1 = { name: "Олексій", age: 25 };
// const user2 = { name: "Марія", age: 30 };

// // Використайте функцію showUserInfo з обома об'єктами user1 та user2, додаючи місто та країну.
// // Ім'я: Олексій, Вік: 25, Місто: Київ, Країна: Україна

// showUserInfo.call(user1, "Київ", "Україна")

// showUserInfo.call(user2, "Львів", "Україна")

//-----------------------------------------------------------------

// Завдання: Створи функцію updateUserDetails, яка приймає додаткову інформацію про користувача (наприклад, місто та країну)
// та оновлює відповідний об'єкт користувача, використовуючи this і метод call.

// У функції має бути використаний this для доступу до властивостей об'єкта. 
// Використай call, щоб передати об'єкт користувача та нові дані. Спробуй реалізувати це самостійно!

function updateUserDetails (){
  this.city = prompt("Введіть своє місто");
  this.country = prompt("Введіть свою країну");
  console.log(`Ім'я: ${this.name}, Місто: ${this.city}, Країна: ${this.country}`)
}

const personInfo = {
  name: 'Ivan',
  city: '',
  country: ''
}

// updateUserDetails.call(personInfo)

//--------------------------------------------------

// let calculator = {
//   read: function () {
//     this.a = parseFloat(prompt("Введіть перше значення"));
//     this.b = parseFloat(prompt("Введіть друге значення"));
//   },
//   sum: function() {
//      this.sumResult = this.a + this.b;
//   },
//   mul: function() {
//      this.mulResult = this.a * this.b;
//   }
// }

// calculator.read()
// calculator.sum()
// calculator.mul()
// console.log(calculator.sumResult);
// console.log(calculator.mulResult)

//----------------------------------------------

// const mathOperations = {
//   calculateMax: function (numbers) {
//     return Math.max.apply(null, numbers);
//   }
// };

// let numbers = [3, 7, 1, 9, 5];

// console.log(mathOperations.calculateMax(numbers))

//----------------------------------------------
// Завдання:
// Створіть об'єкт stringHelper, який має метод longestString.
// Цей метод повинен знаходити найдовший рядок у масиві рядків.

let strings = ["apple", "banana", "cherry", "pineapple"];

const stringHelper = {

  longestString: function (strings) {  
    let lengths = strings.map(str => str.length); // Отримуємо масив довжин рядків
    let maxLength = Math.max.apply(null, lengths); // Знаходимо максимальну довжину
    let longest = strings[lengths.indexOf(maxLength)]; // Знаходимо рядок з цією довжиною
    return longest;
  },

}

// console.log(strings);
// console.log(stringHelper.longestString(strings))

//------------------------------------------------

//javascriptInfo

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показує поточний крок
//     alert( this.step );
//     return this;
//   }
// };


// ladder.up().up().down().showStep().down().showStep();

//practice

const calculator = {
  
  value: 0,

  add: function (n){
     this.value += n;
     return this;
  },

  subtract: function (n) {
    this.value -= n;
    return this;
  },

  multiply: function(n){
    this.value *= n;
    return this;
  },

  divide: function(n){
    if(n === 0){
      console.error("Число не може ділитись на 0")
    }else this.value /= n;
    return this;
  },

  reset: function(n){
  this.value = 0;
  return this;
  },

  show: function(){
    console.log(this.value);
    return this;
  }
}

// calculator.add(10).multiply(2).subtract(5).show().divide(3).show().reset().show();

//----------------------------------------------------------
// Завдання: Реалізувати об'єкт invoice для виставлення рахунків
// Вимоги:
// Об'єкт invoice повинен мати такі методи:

// addItem(name, price) — додає товар або послугу до рахунку, де name — назва товару, а price — його ціна.
// applyDiscount(discount) — застосовує знижку до загальної суми рахунку (від 0 до 100).
// applyTax(tax) — додає податок до рахунку (в процентах).
// removeItem(name) — видаляє товар або послугу з рахунку за назвою.
// showInvoice() — виводить інформацію про всі додані товари, знижки, податки та загальну суму.
// resetInvoice() — скидає всі товари та суми до початкових значень.
// Усі методи (окрім showInvoice) повинні підтримувати ланцюг викликів.
// practice gpt

// доробити

//----------------------------------------------------------------------------

// КОНСТРУКТОРИ, ОПЕРАТОРА "new"

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  Book.allBooks.push(this)
}

Book.allBooks = [];

let book1 = new Book('1984', "Джордж Орвелл", 1949)
let book2 = new Book("Маленький принц", "Антуан де Сент-Екзюпері", 1943);
let book3 = new Book("Війна і мир", "Лев Толстой", 1869);

Book.allBooks.forEach((book, index) => {
  // console.log(`${index + 1}. ${book.title} (${book.year}) - ${book.author}`);
})

//- - - - -- - - - - - - - - - - - - - - - - - - - -- - -- -
// За допомогою функції-конструктора можна створювати об'єкти з певними властивостями. 
// Коли ви викликаєте функцію-конструктор за допомогою оператора new, 
// вона створює новий об'єкт і ініціалізує його властивості на основі переданих аргументів.

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.isRunning = false;

  this.start = function(){
    this.isRunning = true;
    console.log("Автомобіль запущено");
  };
  
  this.stop = function(){
    this.isRunning = false;
    console.log('Автомобіль зупинено')
  }
}

let car1 = new Car('Toyota', "Corolla", 2010)
let car2 = new Car('Tesla', "Model S", 2022)


car1.start();
console.log(car1.isRunning)