// Синтаксис - Повертає той самий об'єкт obj, але вже з новим прототипом.
// Object.setPrototypeOf(obj, prototype);


const animal = { eats: true};
const rabbit = { jumps: true};

// Встановлюємо animal як прототип для rabbit

Object.setPrototypeOf(rabbit, animal)

console.log(rabbit.eats); // true (успадковано від animal)
console.log(rabbit.jumps); // true (власна властивість rabbit)

// Тепер rabbit може використовувати властивості animal, бо успадковує їх через прототип.

// щоб видалити прототип потрібно прописати null - Object.setPrototypeOf(obj, null)