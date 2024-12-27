// https://www.youtube.com/watch?v=nGVYdna4kq4
/* eslint-disable */
// function name() {
//     // тіло
// }

function calculateAndLogNumber() {
    let x = 5;
    x = x + 100;
    x = x / 5;

    console.log("Перша функція: " + x)
}

calculateAndLogNumber()

//-----------------------------------------------

function calculateNumber() {
    let x = 5;
    x = x + 100;
    x = x / 5;

    return x;
}

const result = calculateNumber();
console.log("Друга функція: " + result);

//-------------------------------------------------
// параметри функції

function calculateNumber2(initialValue) {  // задаємо параметр для функції 
    let x = initialValue;    // параметр буде дорівнювати x
    x = x + 100;
    x = x / 5;

    return x;
}

const result2 = calculateNumber2(10);
console.log("Третя функція: " + result2);

//-------------------------------------------------
//визначення площі кола

function calculateCircleArea (radius){
    let result = 0;
    radius = radius ** 2;
    result = Math.PI * radius;
    return result
}
const circleArea1 = calculateCircleArea(5);
console.log(circleArea1);

// створюємо HTML element

function createHTMLElement(tag = 'button', text = 'відправити', id) { // button, відправити буде визначатись автоматично якщо не буде задано аргументів в функції
   const element = document.createElement(tag);
   if(id){   // якщо значення id є то ми присвоюємо новий id
    element.id = id;
   }
   element.innerText = text;
   
   return element;
}

const h1Element = createHTMLElement('h1', 'текст створений в js файлі functionBaseVideo.js ')
// в аргумент ми передали null через те що ми не хочемо присвоювати id для h1
// також можна аргумент перемістити в кінець (тобто замість text) і тоді не потрібно буде писати null

// console.log(h1Element)

document.body.append(h1Element)


const element = createHTMLElement() // не задаємо аргументів // виводиться кнопка з текстом "відправити" 
document.body.append(element)

//------------------------------------------
// arguments
// функція як повертає в консоль значення які ми подали як аргумент
// завдяки циклу for of ми впорядковуємо значення в окремий рядок
// якщо аргументів немає - ми завершуємо виконання функції достроково;
function logArgsToConsole(){
    // console.log(arguments);
    if(!arguments.length){
        return;
    }
    for(argument of arguments){
        console.log(argument);
        
    }
    console.log("більше аргументів немає")
}
// logArgsToConsole()

//------------------------------------------
// функціональний вираз
const sayHello = function() {
    console.log('Hello')
}

sayHello()
// ми не можемо визвати функціональний вираз до того як його було створено - буде помилка

//---------------------------------
// Стрілкова функція =>

const sayBye = () => {
    console.log('Bye');
}

sayBye()

// аргументів в стрілковій функції не існує, вона існує тільки у звичайній функції
// стрілкова функція не створює власного контексту, вона немає this

//- - - - - - -- - - - - - -- DSZnk));

const brokenLinks = ['instagram', 'youtube', 'facebook'] // не вірні посилання

const fixLinkArray = (linksArray) => {  // створюємо стрілкову функцію з параметром linksArray 
    const correctLinks = [];            // створюємо масив в якому будуть коректні значення
    linksArray.forEach(function(brokenLinks){ // forEach перебирає кожен елемент масиву
        const fixedLink = 'https://' + brokenLinks + '.com'; // створюємо локальну змінну і записуємо туди нові правильні посилання
        correctLinks.push(fixedLink) // добавляємо до масиву correctLinks нові посилання з fixedLink 
    })
    return correctLinks // функкція повертає коректний дані 
}
console.log(fixLinkArray(brokenLinks))

//
// або спрощена версія (коротча)
//

const fixLinkArrayLite = (linksArray) => {  
    const correctLinks = [];            
    linksArray.forEach((brokenLinks) => 
    correctLinks.push('https://' + brokenLinks + '.com'),
    );
    return correctLinks
}

