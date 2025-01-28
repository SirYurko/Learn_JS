/*eslint-disable*/
// Object.freeze() — це метод, який дозволяє "заморозити" об'єкт,
// тобто зробити його незмінним. Після застосування цього методу до об'єкта:

// Не можна змінювати властивості об'єкта.
// Не можна додавати нові властивості.
// Не можна видаляти існуючі властивості.

// ------- - -- - - --  --   -- - - - - - 

const user = {
    name: "Oleksii",
    age: 25
  };
  
Object.freeze(user);

user.age = 30; // Not working
user.city = "Kyiv"; // Not working
delete user.name; // Not working

console.log(user)

// Перевірка, чи об'єкт заморожений:
console.log(Object.isFrozen(user)) // true

// Важливо:
// Object.freeze() робить об'єкт незмінним лише на поверхневому рівні (shallow freeze).
// Для повного "заморожування" потрібно застосовувати його рекурсивно до вкладених об'єктів.

// tasks

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: "2020",
}

Object.freeze(car);

car.year = 2022;
car.color = "red";
delete car.model;

console.log(Object.isFrozen(car))
console.log(car)