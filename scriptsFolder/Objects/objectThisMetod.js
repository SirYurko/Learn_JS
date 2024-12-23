// "use strict"
// let user = {name: "Ivan"};
// let admin = {name: "Admin"};

// function sayHi(){
//     alert( this.name);
// }

// user.f = sayHi;    // змінній user надаємо властивість f яка є посиланням на функцію
// admin.f = sayHi;


// user.f();   // Викликаємо функцію через властивість f у кожного об'єкта
// admin.f();


// console.log(user)

//--------------------------------------------------------------------

// task

function makeUser() {
    return {
      name: "Іван",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Який результат?