function isEligibleToVote(age) {
    if ( age == null || isNaN(age) || age >= 120 || age < 0) {
        return ("Ввели не коректні дані");
    }
    else if (age >= 18 ) {
        return ("Можете голосувати");
    }
    else return ("Не можете голосувати!")
    
}
console.log(isEligibleToVote(12))

// quantity = 0;               // кількість товару
    // pricePerItem = 0;           // ціна за одиницю товару
    // discountPercent = 0;        // знижка у відсотках 

    // Загальна сума = Кількість * Ціна за одиницю
    // Сума зі знижкою = Загальна сума - (Загальна сума * Знижка / 100)



// --------------------------------------------------------------

function calculatePrice1(quantity, pricePerItem, discountPercent) {
    
    Number(quantity);               // кількість товару
    Number(pricePerItem);           // ціна за одиницю товару
    Number(discountPercent);        // знижка у відсотках 
    if ( isNaN(quantity) || quantity == null || undefined ){
        return "Не коректні дані";
    }
    function calculateTotal(){
        let totalAmount = quantity * pricePerItem;
        let totalWithDiscount = totalAmount - (totalAmount * discountPercent / 100);
        return totalWithDiscount;
    }   
    return calculateTotal()
}
console.log(calculatePrice1(1, 35000, 30));

//-------------------------------------------------------


// це правильно


function calculatePrice2(quantity, pricePerItem, discountPercent = 0) {
    
    quantity = Number(quantity);               // кількість товару
    pricePerItem = Number(pricePerItem);           // ціна за одиницю товару
    discountPercent = Number(discountPercent);// знижка у відсотках 
    
    
    if (
        isNaN(quantity) || quantity <= 0 ||
        isNaN(pricePerItem) || pricePerItem <= 0 ||
        isNaN(discountPercent) || discountPercent < 0
    )   {
        return "Не коректні дані";
        }
    
    function calculateTotal(){
        let totalAmount = quantity * pricePerItem;
        let totalWithDiscount = totalAmount - (totalAmount * discountPercent / 100);
        return totalWithDiscount;
    }   
    return `Сума до сплати: ${calculateTotal().toFixed(2)} грн`;
}
console.log(calculatePrice2(1, 35000, 30));
                  

// 26.11.2024 

function registration(){
let pass;
let userName = prompt("Введіть логін");
if(userName === "Admin"){
    pass = prompt("Введіть пароль")
}
else if(userName === null || userName === ''){
    alert("Canceled");
}
else alert("Не відомий користувач");

if(pass !== "qwerty"){
    alert("Ви ввели не вірний пароль");
}else alert("Welcome!")
}
registration()