// ------------------------------------
// 26.11.2024
// ------------------------------------

//
// Ця задача створює об’єкт, який описує автомобіль. 
// Він має властивості для зберігання марки, моделі та року випуску автомобіля, а також методи для:
// 1. Отримання інформації про автомобіль.
// 2. Оновлення року випуску автомобіля.
// 3. Перевірки, чи є автомобіль вінтажним (старше 20 років).
// 4. Обчислення віку автомобіля на основі поточного року.

// car = {
//     make: "BMW",
//     model: "Serios 3",
//     year: 2002,
//     getCarInfo: function() {
//       return  `Марка: ${this.make}, Модель: ${this.model}, Рік: ${this.year}`;
//     },
//     updateYear: function(newYear) {
//         this.year = newYear;
//     },
//     isVintage: function() {
//         const currentYear = new Date().getFullYear();
//         const twentyYearsOld = currentYear - 20;
        
//         if(this.year < twentyYearsOld){
//             return true;
//         } else return false;
//     },
//     carAge: function() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.year;
//     }

// }

// console.log(car.getCarInfo())
// console.log("Це вінтажне авто? " + car.isVintage())
// console.log("Рік автомобіля: " + car.carAge())