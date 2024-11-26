// function isEligibleToVote(age) {
//     if ( age == null || isNaN(age) || age >= 120 || age < 0) {
//         return ("Ввели не коректні дані");
//     }
//     else if (age >= 18 ) {
//         return ("Можете голосувати");
//     }
//     else return ("Не можете голосувати!")
    
// }
// console.log(isEligibleToVote(12))

// quantity = 0;               // кількість товару
    // pricePerItem = 0;           // ціна за одиницю товару
    // discountPercent = 0;        // знижка у відсотках 

    // Загальна сума = Кількість * Ціна за одиницю
    // Сума зі знижкою = Загальна сума - (Загальна сума * Знижка / 100)



// --------------------------------------------------------------

// function calculatePrice(quantity, pricePerItem, discountPercent) {
    
//     Number(quantity);               // кількість товару
//     Number(pricePerItem);           // ціна за одиницю товару
//     Number(discountPercent);        // знижка у відсотках 
//     if ( isNaN(quantity) || quantity == null || undefined ){
//         return "Не коректні дані";
//     }
//     function calculateTotal(){
//         let totalAmount = quantity * pricePerItem;
//         let totalWithDiscount = totalAmount - (totalAmount * discountPercent / 100);
//         return totalWithDiscount;
//     }   
//     return calculateTotal()
// }
// console.log(calculatePrice(1, 35000, 30));

//-------------------------------------------------------


// це правильно


// function calculatePrice(quantity, pricePerItem, discountPercent = 0) {
    
//     quantity = Number(quantity);               // кількість товару
//     pricePerItem = Number(pricePerItem);           // ціна за одиницю товару
//     discountPercent = Number(discountPercent);// знижка у відсотках 
    
    
//     if (
//         isNaN(quantity) || quantity <= 0 ||
//         isNaN(pricePerItem) || pricePerItem <= 0 ||
//         isNaN(discountPercent) || discountPercent < 0
//     )   {
//         return "Не коректні дані";
//         }
    
//     function calculateTotal(){
//         let totalAmount = quantity * pricePerItem;
//         let totalWithDiscount = totalAmount - (totalAmount * discountPercent / 100);
//         return totalWithDiscount;
//     }   
//     return `Сума до сплати: ${calculateTotal().toFixed(2)} грн`;
// }
// console.log(calculatePrice(1, 35000, 30));


// 26.11.2024 ДОРОБИТИ

// let userPasswordInput;
// let userLoginInput;

// userLoginInput = prompt("Who's there?");
//     if(userLoginInput == "Admin"){
//          userPasswordInput = prompt("Введіть пароль");
//             if(userPasswordInput !== "qwerty"){
//                 alert("Не вірний пароль");
//             }else alert("Вітаю Admin!");
    
//     }else alert("Мені не відомий цей користувач");


