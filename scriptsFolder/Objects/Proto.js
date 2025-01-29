/*eslint-disable*/

// Створюємо об'єкт user з початковими властивостями
const user = {
    name: '',
    age: 18,
    lvl: 1,
    coins: 0,
};

// Створюємо об'єкт admin з додатковою властивістю isAdmin
const admin = {
    isAdmin: true,
};

// Встановлюємо user як прототип для admin
admin.__proto__ = user;  // старий спосіб встановлення прототипу __proto__


// Оскільки у admin немає власної властивості age,
// JavaScript шукає її у прототипі (user) і знаходить значення 18
// console.log(admin.age) // 18

//-----------------------------------------------------------------

let obj = {
    name: "Oleg",
    age: 34,
    sayHello: () => {
        console.log('Привіт, мене звати Олег');
    }
}

Object.prototype.getCar = function() {  // створюємо новий прототип для всіх
    console.log("My car is Audi");
}

let a = {
    abc: '123',
}

let lena = Object.create(obj)