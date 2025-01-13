/*eslint-disable*/

// let billion = 1_000_000_000; // нижнє підкреслення ігнорується
// let billionShort = 1e9; // 9 нулів після 1


// let mcs = 0.000001
// let mcsShort = 1e-6; 


// // ----------

// console.log( 0xff ) // 255 Шістнадцяткові числа
// console.log( 0xFF ) // same

// let a = 0b11111111;  // двійкова форма 255
// let b = 0o377 // вісімкова форма 255

// console.log( a == b) // true

// // --------------
// // кодування в і
// let num = 255;

// console.log( num.toString(16) ); // ff
// console.log( num.toString(2) ); // 11111111

// console.log( 1231241..toString(16)) // безпосереднє перетворення числа за допомогою " .. "

// // Округлення

// let c = 3.1;

// console.log(Math.floor(c))  // Math.floor Округляє вниз: 3.1 стає 3, та -1.1 стає -2.

// let d = 3.6;

// console.log(Math.ceil(d)) //Math.ceil Округляє вверх: 3.1 стає 4, та -1.1 стає -1.

// let e = 3.5;

// console.log(Math.round(e)) // Math.round Округляє до найближчого цілого числа: 3.1 стає 3, 3.6 стає 4, 3.5 теж округлить до 4.

// let f = 3.4;

// console.log(Math.trunc(f)) // Math.trunc Видаляє все після десяткової крапки без округлення: 3.1 стає 3, -1.1 стає -1.

// let num2 = 1.23456;

// console.log(num2.toFixed(2)) // 1.23 округляє число до n цифр після точки та повертає рядкове представлення результату.

// console.log(Math.random())

// ----
// isFinite(value) перетворює свій аргумент в число і повертає true,
// якщо це звичайне число, та false, якщо NaN/Infinity/-Infinity: 
// alert( isFinite("15") ); // true
// alert( isFinite("str") ); // false, тому що це спеціальне значення: NaN
// alert( isFinite(Infinity) ); // false, тому що це спеціальне значення: Infinity

//-- -- -- - -- - - - -- - - -- - 
// task

let a1 = parseFloat(prompt("введіть перше число"))

let a2 = parseFloat(prompt("введіть друге число"))

let result = a1 + a2;

console.log(result)