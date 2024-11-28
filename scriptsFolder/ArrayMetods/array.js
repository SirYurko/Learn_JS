
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