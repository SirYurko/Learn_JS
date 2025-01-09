// /* eslint-disable */

// const sym1 = Symbol();
// const sym2 = Symbol();

// // console.log(sym1 === sym2); // false


// const sym = Symbol("якийсь опис");

// // console.log(sym.description); // якийсь опис


// const symKey = Symbol("key"); // створюємо унікальний символ symKey, key це опис - він не впливає на унікальність символу
// const obj = { // створили об'єкт
//     [symKey]: "value" // який має властивість в якому ключ властивості є символ
//     // Без квадратних дужок JavaScript сприйняв би symKey як звичайний рядок, а не як символ.
// };

// console.log(obj[symKey]);

//- - -- - - - -- - - - - - - - -- - - -- - -
//practice


// Створення символів
const id1 = Symbol('id1');
const id2 = Symbol('id2');

// Створення об'єкта з прихованими властивостями
const user = {
    name: "Oleksii",
    age: 25,
    [id1]: '12345',
    [id2]: '67890',
}

// Перебір звичайних властивостей
for(let key in user){
    console.log(`${key}: ${user[key]}`) // Виведе лише name і age
}

// Доступ до прихованих властивостей
// console.log(user[id1])
// console.log(user[id2])

//- - - -- - - - - - - - - - - - - - - 

const uniqueKey = Symbol('secret');

const settings = {
    theme: 'dark',
    language: 'en',
    [uniqueKey]: 'hiddenValue',
}

// Додаємо метод getSecret до об'єкта settings
// Використовуємо Object.defineProperty, щоб зробити метод неперебірним
Object.defineProperty(settings, 'getSecret', {
    value: function (){ // Значення властивості — це функція, яка повертає приховану властивість
        return this[uniqueKey]; 
    },
    enumerable: false, // Робимо метод неперебірним (він не з'явиться у for...in)
});

// Цикл for...in для перебору звичайних властивостей об'єкта
for (let key in settings) {
    console.log(`${key}: ${settings[key]}`);
}

// Викликаємо метод getSecret, щоб отримати значення прихованої властивості
console.log(settings.getSecret());