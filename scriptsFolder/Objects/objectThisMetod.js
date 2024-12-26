/* eslint-disable*/
//-----------------------------------------------
// Викликаємо метод this в глобальному оточені

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


const calculator = {
  a: 0,
  b: 0,

  read: function () {
    this.a = parseFloat(prompt("Введіть перше число"));
    this.b = parseFloat(prompt("Введіть друге число"));
  },

  sum: function () {
   return this.a + this.b;
  },

  mul: function () {
    return this.a * this.b;
  }

}

calculator.read()

console.log("Сума:", calculator.sum());
console.log("Добуток:", calculator.mul());


// ще взяти практичних задачок
