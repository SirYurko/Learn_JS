// Синтаксис
// Object.getPrototypeOf(obj) - повертає безпосередньо прототип об'єкта (obj)

// const user = { name: "Юра" };
// const proto = Object.getPrototypeOf(user);
// console.log(proto); // Виведе: {constructor: ƒ, ...}, тобто Object.prototype

///////////////////////////////////////////////////////////////

// const parent = { greet() { return 'Привіт'; } };
// const child = Object.create(parent); // Створюємо child із прототипом parent

// console.log(Object.getPrototypeOf(child));
// // Виведе: { greet: f } - саме parent, бо child наслідує від нього

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(child)));
// // Виведе: Object.prototype - оскільки parent сам наслідує Object.prototype


const grandparent = { familyName: "Петров" }; // Дідусь
const parent = Object.create(grandparent); // Тато наслідує дідусь
parent.hobby = "Риболовля"; // Додаємо властивість татові

const child = Object.create(parent); // Ти наслідуєш тата
child.name = "Юра"; // Власна властивість

console.log(Object.getPrototypeOf(child))
// Виведе: { hobby: "Риболовля" } (тобто parent, твій тато)


console.log(Object.getPrototypeOf(Object.getPrototypeOf(child)))
// Виведе: { familyName: "Петров"} (тобто grandparent, дід)