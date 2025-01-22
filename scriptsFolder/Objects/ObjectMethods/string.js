/*eslint-disable*/

// let single = 'одинарні-лапки';
// let double = "подвійні-лапки";

// let backticks = `зворотні-лапки`;

// //------------------------

// function sum(a, b) {
//     return a + b;
// }

// // alert(`1 + 2 = ${sum(1, 2)}.`)

// //-------------------------

// let guestList = `Гості:
// Іван
// Петро
// Марія
// `;

// // alert(guestList)

// // -----------------------

// guestList2 = "Гості: \n *Ivan\n Petro\n Maria";
// // alert(guestList2)

// //--------------------

// let str = `Hello`;

// first

//alert( str[0] ); // H

//alert( str.charAt(0) ); // H

// last

// alert( str[str.length - 1] ); // o старий метод не використовувати
// alert( str.at(-1) ); // o новий більш зручний

// alert( str[-2] ) // undefined оскільки запис в квадратних дужках якщо потрібно взнати від'ємний індекс слова, використовуйте .at()
// alert( str.at(-2)) // l

// // -------------

// for(let char of str){
//     alert(char) // H e l l o
// }

// let str = 'Ой';

// str[0] = 'о'; // помилка
// alert( str[0] ); // не працює
// // Можна створити новий рядок замість старого, записавши його в ту саму змінну.

// str = 'o' + str[1];

// alert( str )

//---------------
// Зміна регістру

alert ('Інтерфейс'.toUpperCase())  // ІНТЕРФЕЙС
alert('Інтерфейс'.toLocaleLowerCase()) // інтерфейс

// якщо ми хочемо перенести конкретний символ

alert('Interface'[0].toUpperCase()) // i

