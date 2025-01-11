/* eslint-disable */

// рядки

const obj = {
    name: "Yurii",
    age: 22,
    valueOf: function (){
        return `name: ${this.name}, age: ${this.age}`
    }
}

/*
console.log(obj + ''); // name: Yurii, age: 22
console.log(obj.valueOf()); // name: Yurii, age: 22
console.log(String(obj)) // [object Object]  - тут викликається стандартний метод toString() об'єкта, який повертає "[object Object]"
*/

//--------------

// об'єкт як ключ властивості

const obj1 = {}; 

const obj2 = {}; 

// використання об’єкта як ключа властивості об’єкта
obj2[obj1] = 123; // js перетворює obj1 в рядок, оскільки всі ключі є примітивами

//________________________________
// ПРИКЛАД ЯК ЦЕЙ ОБ'ЄКТ ВИГЛЯДАЄ
// Obj2 = {
//     "[object Object]": 123
// }
//________________________________

// console.log(obj2) // { "[object Object]": 123 }

//---------------

// ЧИСЛА

const objNum = {
        valueOf(){
            return 43;
        }
}

// console.log(objNum.valueOf()) // 43, викликаємо метод valueOf()

let num = Number(objNum) // або створємо змінну та призначаємо їй об'єкт який буде конвертований в Number

// console.log(num) // 43

// - - -- - - - - --- - - -

// Математичні операції (окрім бінарного додавання)

const obj10 = {
    valueOf() {
        return 10;
    }
};

let result = obj10 - 3; // Викликається valueOf(), об'єкт перетворюється в 10

// console.log(result) 7
 
// У цьому прикладі об'єкт obj має метод valueOf(), який повертає число 10. 
// Операція віднімання obj - 3 спочатку викликає valueOf(), отримує число 10, 
// а потім виконується операція 10 - 3, що дає результат 7.

//- - -- -- - - -- - - - -- - - 

// Унарне додавання +obj

const obj5 = {
    valueOf(){
        return 5;
    }
};

let n = +obj5; // перетворюємо на число унарним оператором

// console.log(n) // 5

//- - -- - -- - - - -- - - - -

// Порівняння об'єктів з числами (менше/більше)

const obj12 = {
    valueOf(){
        return 12;
    }
};

const obj13 = {
    valueOf(){
        return 13;
    }
};

let greater = obj12 > obj13;

// console.log(greater) // false