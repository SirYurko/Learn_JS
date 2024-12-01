
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let springMonths = months.slice(2, 5);
    // синтаксис // array.slice(start, end)
    // витягує частину масиву, індекс з якого почне, індекс на якому закінчить
    // console.log(months)
    // console.log("Весняні місяці: " + springMonths)

    let summersMounths = months.slice(5, 8)
    // console.log("Літні місяці: " + summersMounths)


    months.splice(5, 2, "Summer1", "Summer2", "Summer3")  
    // синтаксис // splice() - array.splice(start, deleteCount, item1, item2, ..., itemN) 
    // індекс з якого почне, видалення кількість індексів, що замість індексів
    // console.log("Всі місяці замінено Літні на Summer: " + months)

    let autumnMonths = ["September", "October", "November"]
    let unitedMonth = autumnMonths.concat(springMonths);
    // синтаксис // concat() - newArray = array1.concat(array2, array3, ..., arrayN)
    // об'єднює масиви в один
    // console.log("Об'єднані місяці: " + unitedMonth)

    unitedMonth = unitedMonth.concat(summersMounths)

    // console.log("Об'єднані місяці, добавлено summersMounth: " + unitedMonth)

    // console.log("Всі місяці: " + months);

    export default unitedMonth;


    //-------------------------------------------
    // filter + forEach + map + reduce

const shoppingList = [
        { name: "Apples", category: "Fruits", price: 2, quantity: 4 },
        { name: "Bread", category: "Bakery", price: 3, quantity: 1 },
        { name: "Milk", category: "Dairy", price: 1.5, quantity: 2 },
        { name: "Chicken", category: "Meat", price: 5, quantity: 3 },
        { name: "Carrots", category: "Vegetables", price: 1, quantity: 6 },
      ];

const filteredList = shoppingList.filter(function(product){
    return product.price > 2;
})
console.log(filteredList);
const totalPriceList = shoppingList.map(function(product){
    return {
        name: product.name,
        total: product.price * product.quantity, 
    };
})
console.log(totalPriceList)

shoppingList.forEach(function(product){
    console.log(`Назва товару: ${product.name}, Загальна вартість: ${product.price * product.quantity}`)
})

const totalshopingList = totalPriceList.reduce(function(sum, product){
    return sum + product.total;
}, 0);

console.log("Загальна вартість товарів:", totalshopingList)