/**
 * Поверхневе клонування об'єктів
 * 
 * Копіює всі властивості з об'єкта-джерела в новий об'єкт.
 * 
 * @param {object} user об'єкт джерело нашої копії
 * @returns {object} clone новий об'єкт який містить властивості з оригіналу 
 * 
 */
// let user = {
//     name: "Микола",
//     age: 30
// };

// let clone = {}; // новий порожній об'єкт

// копіюємо в новий об'єкт всі властивості з user
// for (let key in user){
//     clone[key] = user[key];
// }

// тепер clone є повністю незалежним об'єктом з тим самим вмістом
// clone.name = "Петро";

// console.log( user.name ); // значення "Микола" все ще в оригінальному об'єкті

//-----------------------------------------------------------------------------

/**  Метод Object.assign() використовується для копіювання значень усіх власних перерахованих
 властивостей з одного або більше вихідних об’єктів у цільовий об’єкт. Після копіювання він повертає цільовий об'єкт.

 Синтаксис
    Object.assign(dest, ...sources)

    Перший аргумент dest є цільовим об’єктом.
    Подальші аргументи – це список вихідних об’єктів.
    Він копіює властивості всіх вихідних об’єктів у цільовий dest, а потім повертає його як результат.
*/

//-------------------------------------------------------------

// let user = {
//     name: "Микола",
// };

// let permissions1 = {
//     canView: true,
// };

// let permissions2 = {
//     canEdit: true,
// }

// копіює всі властивості з permissions1 та permissions2 в user
// Object.assign(user, permissions1, permissions2);

// Тепер user = { name: "Микола", canView: true, canEdit: true }
// console.log(user.name)
// console.log(user.canView)
// console.log(user.canEdit)

// Якщо скопійована назва властивості вже існує, вона буде перезаписана:

// let person = { name: "Микола"}

// Object.assign(person, {name: "Петро"});

// console.log(person.name)


// створення нового об'єкту та додавання до нього інших об'єктів
const original = {
    a: 1,
    b: 2,              // { a: 1, b: 2, c: 3 }
    c: 3
  };
  
  let copyObject = {d: 4} // {d: 4}
  
  // eslint-disable-next-line no-unused-vars
  let newObject = Object.assign({}, original, copyObject) // додаємо до нового масиву решту об'єктів
  
  // console.log(newObject) //     { a: 1, b: 2, c: 3 d: 4 }
  // console.log(original) //      { a: 1, b: 2, c: 3 }
  // console.log(copyObject)//     {d: 4}
  

//----------------------------------------------------------------------
// structuredClone()
// ПРИКЛАД

let user = {
  name: "Микола",
  sizes: {
    height: 182,
    width: 50
  }
};

// eslint-disable-next-line no-unused-vars
let clone = structuredClone(user);

// console.log( user.sizes === clone.sizes ); // false, різні об'єкти

// user та clone тепер абсолютно не пов'язані між собою
user.sizes.width = 60;    // тепер змінюємо властивість в одному місці
// console.log(clone.sizes.width); // 50, інше місце не пов'язане з попереднім

//----------------------------------------------------------------------------
// Використай Object.assign() для створення поверхневої копії об'єкта person і збережи його у змінну shallowCopy.
// Змініть значення shallowCopy.job.title на "Designer".
// Виведи на екран значення person.job.title і поясни результат.


let person = {
  name: "Олег",
  age: 25,
  job:{
    title: "Developer",
    company: "Google",
  }
};

let shallowCopy = Object.assign(person);

shallowCopy.job.title = "Designer";

// console.log(person)
// console.log(shallowCopy)

// цей код виконав поверхнє копіювання, тобто властивість title змінилась на Designer у двох змінних,
// оскільки посилання лишилось єдиним, щоб зробити глибоке копіювання потрібно використати structuredClone()

//-------------------------------------------------------------------------

let person2 = {
  name: "Олег",
  age: 25,
  job:{
    title: "Developer",
    company: "Google",
  }
};

let shallowCopy2 = structuredClone(person2); // глибоке копіювання об'єкта

shallowCopy2.job.title = "Designer"; 

// console.log(person2);
// console.log(shallowCopy2);

//----------------------------------------------------------------------------------

//practice

const car1 = {
  name: "bmw",
  model: "serias 3",
  year: 2012,
  owner: "Dr. House",
}

const carUpdate = {
  wheels: "soft",
  ownerNumbers: 2,
}

// eslint-disable-next-line no-unused-vars
const carNew = Object.assign({}, car1, carUpdate)

// console.log(carNew)

// console.log(car1)

// console.log(carUpdate)

// 

const obj1 = {
  name: "Car",
  details: {
    name: "BMW",
    years: 2020,
  },
  features: ["ABS", "Airbags"],
};

const clones = structuredClone(obj1);

console.log(clones)

console.log(obj1)