/*eslint-disable*/


// Оголошуємо об'єкт `range`, який містить діапазон чисел від `from` до `to`
let range = {
    from: 1, // Початкове значення діапазону
    to: 5    // Кінцеве значення діапазону
}

// Додаємо до об'єкта `range` метод `[Symbol.iterator]`, щоб зробити його ітерабельним
range[Symbol.iterator] = function() {
    return {
        current: this.from, // Початкове значення діапазону
        last: this.to,      // Кінцеве значення діапазону

        // Метод `next()` буде викликатися під час кожної ітерації `for..of`
        next() {
            if (this.current <= this.last) {
                // Якщо ще є числа в діапазоні, повертаємо поточне значення та збільшуємо лічильник
                return { done: false, value: this.current++ };
            } else {
                // Якщо досягли кінця, повідомляємо, що ітерація завершена
                return {done: true };
            }
        }
    };
};

// Тепер `range` можна використовувати у `for..of`, оскільки він став ітерабельним
for (let num of range) {
    console.log(num);   // Виведе 1, 2, 3, 4, 5
}