
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

// .bind


function calcDiscount(age) {
  if(age > 65 ){
    console.log(this.price / 2)
  }else console.log(this.price)  
}
const buy = {title: "phone", price: 1000};

const calcDiscountForElderly = calcDiscount.bind(buy, 70)

calcDiscountForElderly() // все ідентичне до call АЛЕ ФУНКЦІЮ ВІН НЕ ВИКЛИКАЄ А ТІЛЬКИ
// ЗАПИСУЄ, ЩОБ ВИКЛИКАТИ ФУНКЦІЮ ПОТРІБНО ЗАПИСАТИ ФУНКЦІЮ В НОВУ ЗМІННУ