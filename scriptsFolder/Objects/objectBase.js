// Синтаксис об'єктів
// let user = new Object(); // синтаксис "конструктора об’єктів"
// let user = {};  // синтаксис "літералу об’єкта"

// let user = {     // об’єкт
//     name: "Іван",  // за ключем "name" зберігаємо значення "Іван"
//     age: 30        // за ключем "age" зберігати значення "30"
//   };


// Для звернення до властивостей використовується запис через крапку:

// // отримаємо значення властивостей об’єкта:
// alert( user.name ); // Іван
// alert( user.age ); // 30

let user = {
    name: "Oleksii",
    age: 22,
    admin: true,
    "likes birds": true,  // Ім’я властивості з декількох слів повинно бути в лапках

}

console.log(user) // виводимо об'єкт в консоль
delete user.admin // видаляємо властивість admin в об'єкті User
console.log(user) // виводить об'єкт без властивості admin

user["Любить птахів"] = true;  //якщо ім'я властивості містить більше двох слів, 
// звертання до властивості відбувається не через крапку, а через квардратні дужки

console.log(user)