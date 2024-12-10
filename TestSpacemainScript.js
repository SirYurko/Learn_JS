// const basket = {
//     Laptop: 1500,
//     Keyboard: 100,
//     HDMI: 10,
// };

// delete basket.HDMI;

// // const goods = { HDMI: 10, Mouse: 25,};
// // const order = { ...basket, ...goods};

// const calculateTotal = function(obj) {
//     let total = 0;
//     for (const key in obj) {
//         total += obj[key];
//     }
//     return total;
// }

// const mixTotal = (obj) => {
//     obj.total = calculateTotal(obj);
// };

// mixTotal(basket);
// calculateTotal(basket);
// console.log(basket);


// const user = {
//     name: "Yurii",
//     age: 22,
//     email: "mitkevichy@gmail.com",
//     getInfo: function() {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
//     updateEmail: function (editEmail) {
//         this.email = editEmail;
//     }
// };

// console.log(user.getInfo())
// console.log(user.updateEmail("Test@gmail.com"));


// --------------------
// const book = {
//     title: "DeadHeads",
//     author: "Clark Harris",
//     year: 1992,
//     isAvailable: true,
//     getBookInfo: function () {
//         return `title: ${this.title}, author: ${this.author}, year: ${this.year}, isAvailable: ${this.isAvailable}`
//     },
//     changeAvailability: function (){
//         if(this.isAvailable === true){
//             this.isAvailable = false;
//         } else {
//             this.isAvailable = true;
//         }
//     }
    
// }
// book.changeAvailability();
// console.log(book.getBookInfo())


// -------------------------------------------------
// 26.11.2024
// -------------------------------------------------
// function isEven(number) {
//     if( number % 2 === 0){
//         return true;
//     }else return false;
// }

// console.log(isEven(7))

// const user = {
//     name: "Yurii",
//     age: 22,
//     email: "testemail@test.com",
//     increaseAge: function() {
//         return ++this.age;
//     }
// }

// console.log(user.increaseAge())

//-------------------------------------------------------------------------------------

// Приклад із вкладеністю:

// for (let i = 0; i < 10; i++) {
//   if (cond) { 
//     // У цьому блоці виконується певна логіка, якщо умова виконується.
//     console.log(i);
//   }
// }

// // Приклад без зайвої вкладеності:

// for (let i = 0; i < 10; i++) {
//   if (!cond) continue; // Якщо умова не виконується, перейти до наступної ітерації.
//   console.log(i); // Логіка виконується тільки якщо `cond` виконується.
// }
// Що відбувається?

// Використання continue означає: "пропустити решту коду в цьому
// циклі і перейти до наступної ітерації".
// Якщо умова !cond (cond === false), цикл переходить до наступного
// значення i, не виконуючи код нижче.

// Чому це корисно?

// Простота читання: Логіка коду стає більш прямолінійною і легкою для розуміння.
// Менше вкладеності: Зменшення рівнів вкладеності полегшує розуміння 
//логіки та знижує ризик помилок.
// Зосередження на основному: Головний код (console.log(i) у прикладі) 
//завжди знаходиться на поверхневому рівні, а не "захований" у вкладених блоках.
// Цей підхід корисний, коли ви хочете швидко виключити певні випадки
// (наприклад, за допомогою continue) і зосередитися на основній логіці.

//--------------------------------------------------------------------------------------

//MochaTestingCode// функція яка повертає число 42

const t01 = () => {
    return 42;
}

//MochaTestingCode// функція яка повертає число більше 100

const t02 = () => {
    return 143;
}

//MochaTestingCode// функція яка повертає число менше 100

const t03= () => {
    return 422;
}

//MochaTestingCode// функція яка повертає число не рівне 5

const t04= () => {
    return 55;
}

//MochaTestingCode// функція яка повертає рядок

const t05= () => {
    return "55";
}


//MochaTestingCode// функція яка повертає масив який містить число 66

const t06= () => {
    return [52, 23, 12, 66]
}

//MochaTestingCode// функція яка повертає масив який містить число 66

const t07= () => {
    return [22, 44, 22]
}

//MochaTestingCode// функція яка повертає об'єкт з властивістю foo рівним 'bar'

const t08= () => {
    return { a : 3, foo : "bar"}
}

//MochaTestingCode// функція яка повертає масив з числами 33, 44, 55 в довільному порядку

const t09= () => {
    return [44, 33, 55];
}

//MochaTestingCode// функція яка повертає масив з числами 33, 44, 55 в строгому порядку

const t10= () => {
    return [33, 44, 55];
}