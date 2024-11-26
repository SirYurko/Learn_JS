// const basket = {
//     Laptop: 1500,
//     Keyboard: 100,
//     HDMI: 10,
// };

// delete basket.HDMI;

// // const goods = { HDMI: 10, Mouse: 25,};
// // const order = { ...basket, ...goods};

// const calculateTotal = function(obj) {
//     let total = 0;
//     for (const key in obj) {
//         total += obj[key];
//     }
//     return total;
// }

// const mixTotal = (obj) => {
//     obj.total = calculateTotal(obj);
// };

// mixTotal(basket);
// calculateTotal(basket);
// console.log(basket);


// const user = {
//     name: "Yurii",
//     age: 22,
//     email: "mitkevichy@gmail.com",
//     getInfo: function() {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
//     updateEmail: function (editEmail) {
//         this.email = editEmail;
//     }
// };

// console.log(user.getInfo())
// console.log(user.updateEmail("Test@gmail.com"));


// --------------------
// const book = {
//     title: "DeadHeads",
//     author: "Clark Harris",
//     year: 1992,
//     isAvailable: true,
//     getBookInfo: function () {
//         return `title: ${this.title}, author: ${this.author}, year: ${this.year}, isAvailable: ${this.isAvailable}`
//     },
//     changeAvailability: function (){
//         if(this.isAvailable === true){
//             this.isAvailable = false;
//         } else {
//             this.isAvailable = true;
//         }
//     }
    
// }
// book.changeAvailability();
// console.log(book.getBookInfo())


// -------------------------------------------------
// 26.11.2024
// -------------------------------------------------
// function isEven(number) {
//     if( number % 2 === 0){
//         return true;
//     }else return false;
// }

// console.log(isEven(7))

// const user = {
//     name: "Yurii",
//     age: 22,
//     email: "testemail@test.com",
//     increaseAge: function() {
//         return ++this.age;
//     }
// }

// console.log(user.increaseAge())

