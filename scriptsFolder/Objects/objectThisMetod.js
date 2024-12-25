
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

  console.log(item1, item2, item3)
  // так ми можемо створювати велику кількість об'єктів за допомогою функції конструктора