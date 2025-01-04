// /* eslint-disable*/
// // КОНСТРУКТОРИ, ОПЕРАТОРА "new"

// const { Controller } = require("estraverse");

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
  
//     Book.allBooks.push(this)
//   }
  
//   Book.allBooks = [];
  
//   let book1 = new Book('1984', "Джордж Орвелл", 1949)
//   let book2 = new Book("Маленький принц", "Антуан де Сент-Екзюпері", 1943);
//   let book3 = new Book("Війна і мир", "Лев Толстой", 1869);
  
//   Book.allBooks.forEach((book, index) => {
//     // console.log(`${index + 1}. ${book.title} (${book.year}) - ${book.author}`);
//   })
  
//   //- - - - -- - - - - - - - - - - - - - - - - - - - -- - -- -
//   // За допомогою функції-конструктора можна створювати об'єкти з певними властивостями. 
//   // Коли ви викликаєте функцію-конструктор за допомогою оператора new, 
//   // вона створює новий об'єкт і ініціалізує його властивості на основі переданих аргументів.
  
//   function Car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.isRunning = false;
  
//     this.start = function(){
//       this.isRunning = true;
//       console.log("Автомобіль запущено");
//     };
    
//     this.stop = function(){
//       this.isRunning = false;
//       console.log('Автомобіль зупинено')
//     }
//   }
  
//   let car1 = new Car('Toyota', "Corolla", 2010)
//   let car2 = new Car('Tesla', "Model S", 2022)
  
  
//   car1.start();
//   console.log(car1.isRunning)
  
  
  //--------------------------------------------
  
//   let obj = {};

//   function A() { return obj; }
//   function B() { return obj; }
  
//   alert( new A() == new B() ); // true

   
//- - - - - - - - - -- - - - - - - - - 

//   Завдання: Спільний лічильник

// Створіть функції-конструктори CounterA та CounterB, 
// які використовують один і той самий внутрішній лічильник.
// При створенні нового об’єкта за допомогою new CounterA() 
// або new CounterB(), вони повинні мати методи:


// Код створює два лічильники, 
// які працюють з однією глобальною змінною counterValue.
// Виклики методів increment змінюють цю змінну,
// і обидва лічильники бачать однакове значення.

let counterValue = 0;

function CounterA() {
    this.increment = function() {
        counterValue++;
    };

    this.getValue = function() {
        return counterValue;
    };
    
}

function CounterB() {
    this.increment = function() {
        counterValue++;
    };

    this.getValue = function() {
        return counterValue;
    };
}

let counter1 = new CounterA();
let counter2 = new CounterB();

counter1.increment();
counter1.increment();

// console.log(counter1.getValue())
// console.log(counter2.getValue())

// console.log(counter1)
// - - - - - - - - - - - - - - - - - - - -

function Calculator(){
    this.a = '';
    this.b = '';
    this.read = function (){
        a = parseFloat(prompt("Введіть значення a"));
        b = parseFloat(prompt("Введіть значення b"));
    }
}

