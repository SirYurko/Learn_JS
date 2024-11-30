// const numbers = [3, -5, 7, -2, 0, 4, -1];
// // повертаємо масив позитивних чисел
// const newNumbers = numbers.filter(function(number){
//     return number > 0;
// })
// console.log(newNumbers)

//--------------------------------------------------
// відвільтрувати числа які більше 20 та помножити їх на два
// const numbers = [10, 15, 20, 25, 30];

// const filteredNumbers = numbers.filter(function(number){
//     return number >= 20;
// })
// const mapNumbers = filteredNumbers.map(function(number){
//     return number * 2
// })

// console.log(mapNumbers)
//--------------------------------------------------------------
// відфільтрувати тільки не парні числа
// const numbers  = [12, 15, 22, 33, 44, 55, 60, 71, 82]; 

// const newNumbers = numbers.filter(function(number){
//     return number % 2 !== 0;
// })

// console.log(newNumbers)
//-------------------------------------------------------------
// Умова: відфільтрувати масив з isStock True
// після цього вивести тільки ціни в консоль
// const products = [
//     { name: "Laptop", price: 1200, inStock: true },
//     { name: "Phone", price: 800, inStock: false },
//     { name: "Tablet", price: 600, inStock: true },
//     { name: "Monitor", price: 400, inStock: true },
//     { name: "Headphones", price: 100, inStock: false }
//   ];

//   const filteredProducts = products.filter(function(product){
//     return product.inStock == true; // Повертаємо true або false для фільтрації
//   })
//   console.log(filteredProducts)

//   const mapProducts = filteredProducts.map(function(product){ 
//     return product.price; // повертає в новий масив тільки ціну
//  })
 
//  console.log(mapProducts)