/*eslint-disable*/

// основна робота безпосередньо в браузері

// // Створюємо об'єкт user з початковими властивостями
// const user = {
//     name: '',
//     age: 18,
//     lvl: 1,
//     coins: 0,
// };

// // Створюємо об'єкт admin з додатковою властивістю isAdmin
// const admin = {
//     isAdmin: true,
// };

// // Встановлюємо user як прототип для admin
// admin.__proto__ = user;  // старий спосіб встановлення прототипу __proto__


// // Оскільки у admin немає власної властивості age,
// // JavaScript шукає її у прототипі (user) і знаходить значення 18
// // console.log(admin.age) // 18

// //-----------------------------------------------------------------

// let obj = {
//     name: "Oleg",
//     age: 34,
//     sayHello: () => {
//         console.log('Привіт, мене звати Олег');
//     }
// }

// Object.prototype.getCar = function() {  // створюємо новий прототип для всіх
//     console.log(`${this.name} has car Audi`); // lena.getCar() = "Elena has car Audi"
// }

// let a = {
//     abc: '123',
// }

// let lena = Object.create(obj)

// lena.name = 'Elena'

// let arrayName = new Array('Egor', 'Dima', 'Oleg') // враховуючи що в масиві є ще безліч прототипів формально це об'єкт

//-------------------------

// const person = new Object({
//     name: 'Maxim',
//     age: 25,
//     greet: function() {
//         console.log('Greet!')
//     }
// }) 

// Object.prototype.sayHello = function() {
//     console.log("Hello")
// }

// const lena = Object.create(person)


// const str = new String( 'I am string' )

let person = { 
    name: "Alice",
    age: 25
};

function checkProperty(obj, key) { // перевірка чи є в person властивість
    return Object.hasOwn(obj, key)
}

console.log(checkProperty(person, "name")); // true
console.log(checkProperty(person, "toString")); // false (успадковано)
console.log(checkProperty(person, "age")); // true
console.log(checkProperty(person, "height")); // false (немає такої властивості)