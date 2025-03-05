// // Приклад 1

// const animal = {
//     makeSound() {
//         console.log("some sound");
//     }
// }   

// const dog = Object.create(animal);
// dog.makeSound(); // some sound

// console.log(Object.getPrototypeOf(dog) === animal); // true

// console.log(dog)   // {}

// console.log(animal) // { makeSound: [Function: makeSound] }


// // Приклад 2 

// const cat = Object.create(animal, {
//     name: {
//         value: "Fluffy",
//         writable: false
//     },
//     age: { 
//         value: 3,
//         writable: true,  
//     },
// });

// console.log(cat.name); // Fluffy
// console.log(cat.age); // 3

// cat.name = "Tom"; // Не змінюється, бо writable: false
// console.log(cat.name); // Fluffy

// Задачка від GPT

const vehicle = {
    type: "Транспорт",
    info() {
        console.log("Це транспортний засіб")
    },

}

const car = Object.create(vehicle, {
    brand: {
        value: "Toyota",
        writable: false,
    },
    info: {
        value: function() {
            console.log(`Це транспортний засіб ${this.brand}`)
        }
    }
});

console.log(car.type); // "Транспорт"
console.log(car.brand); // має бути задана марка авто
car.info(); // "Це автомобіль марки Toyota."

car.brand = "BMW";
console.log(car.brand); // "Toyota" (не зміниться, якщо writable: false)