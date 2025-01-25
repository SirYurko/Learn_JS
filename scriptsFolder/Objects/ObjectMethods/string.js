 
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

// alert ('Інтерфейс'.toUpperCase())  // ІНТЕРФЕЙС
// alert('Інтерфейс'.toLocaleLowerCase()) // інтерфейс

// // якщо ми хочемо перенести конкретний символ

// alert('Interface'[0].toUpperCase()) // i

//------------------------
// Пошук підрядків

// Синтаксис:
// str.indexOf(substr, pos)

// let str = 'Віджет з ідентифікатором';

// alert( str.indexOf('Віджет') ) // 0, тому що 'Віджет' було знайдено на початку

// alert( str.indexOf('віджет') ); // -1, збігів не знайдено, пошук чутливий до регістру

// alert( str.indexOf("ід") ); // 1, підрядок "ід" знайдено на позиції 1 (..іджет з ідентифікатором)

// alert( str.indexOf("з")) // 7

// // Необовʼязковий другий параметр pos дозволяє нам почати пошук із заданої позиції.

// alert( str.indexOf('ід', 2)) // 9 (..ідентифікатором)

//- - -- - - - - - -

// Щоб знайти усі збіги, нам потрібно запустити indexOf в циклі.
// Кожен новий виклик здійснюється з позицією після попереднього збігу:

// let str = 'Хитрий, як лисиця, сильний як Як';

// let target = 'як';  // давайте знайдемо це

// let pos = 0;
// while(true){
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     alert(`Знайдено тут: ${foundPos}` );
//     pos = foundPos + 1; // продовжуємо з наступної позиції
// }


// - -- - - - -- - - - - - -- 
//   Пошук ключових слів is
// let str = 'This is a test. Is it working as it is supposed to?';

// let target = 'is';
// let lowerStr = str.toLocaleLowerCase(); // створюємо нову змінну щоб оригінал не змінився
// target = target.toLocaleLowerCase(); // переводимо також targert in LowerCase
// let pos = 0;

// // Цикл для пошуку всіх входжень підрядка target у lowerStr
// while(true){
//     // Шукаємо підрядок target, починаючи з позиції pos
//     let foundPos = lowerStr.indexOf(target, pos);

//     // Якщо підрядок не знайдено (indexOf повертає -1), виходимо з циклу
//     if (foundPos == -1) break;

//     console.log( `Знайдено тут: ${foundPos}` ); 
    
//     // Оновлюємо позицію для пошуку, щоб почати з наступного символу
//     pos = foundPos + 1;
// }

// console.log(str) //  'This is a test. Is it working as it is supposed to?'

//---------------------

/* задачка від gpt Пошук ключових слів
let str = 'Apple is sweet, but apple pie is even sweeter. I love apple juice.';
let target = 'apple';

let lowerStr = str.toLocaleLowerCase();
let pos = -1;
while((pos = lowerStr.indexOf(target, pos + 1)) != -1){
    console.log(`Знайдений індекс: ${pos} `)
}
*/

// перевірка за допомогою if 
// let str = "Віджет з ідентифікатором";

// if (str.indexOf("Віджет") != -1) {
//     alert("Є співпадіння"); // тепер працює!
// }

//---------------------------

// includes, startsWith, endsWith
// Сучасніший метод str.includes(substr, pos) повертає true/false в залежності від того чи є substr в рядку str
// Цей метод доцільно використовувати, коли потрібно перевірити чи є збіг, але не потрібна позиція:

// alert( "Віджет з ідентифікатором".includes("Віджет") ); // true

// alert( "Привіт".includes("Бувай") ); //false

// Необовʼязковий другий аргумент pos – це позиція з якої почнеться пошук:

// alert( 'віджет'.includes("ід")) //true

// alert( 'віджет'.includes('ід', 3)) // false, починаючи з 3-го символа, підрядка "ід" немає

// Відповідно, методи str.startsWith та str.endsWith перевіряють,
// чи починається і чи закінчується рядок певним підрядком.

// alert("віджет".startsWith('від')); // true, 'віджет' починається з 'від'

// alert("віджет".endsWith("жет")); // true, "віджет" закінчується підрядком "жет"

//------------------------------

// Отримання підрядка
//В JavaScript є 3 метода для отримання підрядка: substring, substr та slice.

// Синтаксис:
// str.slice(start [, end])

// Повертає частину рядка починаючи від start до (але не включно) end.
// let str = 'stringify';
// alert( str.slice(0, 5) ); // 'strin', підрядок від 0 до 5 (5 не включно)
// alert( str.slice(0, 1) ); // 's', від 0 до 1, але  1 не включно, тому лише символ на позиції 0

// Якщо другий аргумент відсутній, тоді slice поверне символи до кінця рядка:

// alert( str.slice(2) ) // 'ringify', з позиції 2 і до кінця

// Також для start/end можна задати відʼємне значення. Це означає, що позиція буде рахуватися з кінця рядка:

// alert ( str.slice(-4, -1)); // 'gif'

// Синтаксис:
// str.substring(start [, end])
// Повертає частину рядка між start та end (не включаючи end)…

// Цей метод майже такий самий що і slice, але він дозволяє задати start більше ніж end 
// (у цьому випадку він просто міняє значення start і end місцями).

// для substring ці два приклади однакові
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"

// ...але не для slice:
// alert( str.slice(2, 6) ); // "ring" (те саме)
// alert( str.slice(6, 2) ); // "" (порожній рядок)

// Відʼємні аргументи (на відміну від slice) не підтримуються, вони інтерпретуються як 0.

// Синтаксис:
// str.substr(start [, length])
// Повертає частину рядка з позиції start, із заданою довжиною length.

// На відміну від попередніх методів, цей дозволяє вказати довжину length замість кінцевої позиції:
// let str = 'stringify';
// alert( str.substring(2, 4)) // 'gi'

// - - - - - - - -- - - - - - -
// task

// function ucFirst(str) {
//    if(!str) return str; 
//    return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('hello'))

//------

// function checkSpam(str) {
//     let target = 'XXX';
//     let lowerStr = str.toLocaleLowerCase();
//     target = target.toLocaleLowerCase();
//     let pos = 0;

//     if(lowerStr.indexOf(target) !== -1){
//         return true;
//     }
//     return false;
// }


// console.log(checkSpam('free xxxxx'))

// або з методом includes

// function checkSpam2(str){
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// console.log(checkSpam2("xxx"))

//--------------------