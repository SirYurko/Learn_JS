//--------------------------------------------

// Синтаксис
// arr.reduceRight(callback, initialValue);

//--------------------------------------------

// Приклад

// const arr = ['a', 'b', 'c', 'd'];

// const result = arr.reduceRight((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, '');

// console.log(result); // "dcba"

// -------------------------------------------

/**
 * Об'єднує елементи масиву в рядок, починаючи з останнього елемента.
 *
 * @param {string[]} words - Масив слів, який потрібно об'єднати.
 * @return {string} - Рядок, що складається з елементів масиву, об'єднаних пробілами, починаючи з останнього елемента.
 */


const words = ['JavaScript', 'is', 'fun'];

const reverseWords = words.reduceRight(function(accumolator, currentValue) { // все аналогічно як у звичайному reduce() 
    return accumolator + ' ' + currentValue;  //але повертає зворотнє значення, також додаємо " " пробіл між елементами масиву
}, '').trim();                               // trim видаляє зайвий пробіл в кінці

console.log(reverseWords)