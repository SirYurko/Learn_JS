import unitedMonth from "./array.js";


// Завдання:
// У вас є масив об’єктів, кожен із яких містить інформацію про студента:
// його ім’я та середній бал. Ви маєте створити новий масив,
// у якому буде міститися лише ім'я студента та його статус.
// Статус визначається за середнім балом:
// Якщо середній бал ≥ 75, статус: "Пройшов".
// Якщо середній бал < 75, статус: "Не пройшов".


const students = [
    { name: "Anna", average: 85 },
    { name: "Mike", average: 60 },
    { name: "Sophia", average: 78 },
    { name: "John", average: 72 },
];

const newStunents = students.map(function(student){
    if(student.average > 75){
        return `name: ${student.name} пройшов: ${student.average}`
    }else if(student.average <= 75){
        return `name: ${student.name} не пройшов: ${student.average}`;}
})
// console.log(newStunents)



// або таким методом, який буде вірніший



const studentss = [
    { name: "Anna", average: 85 },
    { name: "Mike", average: 60 },
    { name: "Sophia", average: 78 },
    { name: "John", average: 72 },
];
// Використовуємо метод map(), щоб створити новий масив newsStudents
const newsStudents = studentss.map(function(student) {
// Повертаємо новий об'єкт для кожного студента
// з його ім'ям (name) і статусом (status)
    return {
        name: student.name,// Ім'я залишається незмінним
        // Використовуємо тернарний оператор, щоб визначити статус студента:
        // Якщо середній бал більше 75, статус "Пройшов", інакше — "Не пройшов"
        status: student.average > 75 ? "Пройшов" : "Не пройшов"
    };
});
// console.table(newsStudents);
// ------------------------------------------------
const products = [
    { name: "Laptop", price: 1200, quantity: 5 },
    { name: "Mouse", price: 25, quantity: 0 },
    { name: "Keyboard", price: 45, quantity: 7 },
    { name: "Monitor", price: 300, quantity: 0 },
];
// Використовуємо map для створення нового масиву з додатковою властивістю
const newProducts = products.map(function(product){
    return {
        name: product.name,
        price: product.price,
        stasus: product.quantity > 0 ?  "В наявності" : "Відстуній"  // Перевіряємо кількість і встановлюємо статус
    }
})
// console.table(newProducts)

//--------------------------------------------------

const fullNames = ["Іван Іваненко", "Олексій Петров", "Марія Коваленко"]

const shortName = fullNames.map(function(name){
    const parts  = name.split(" ");  // Розділяємо на ["Ім'я", "Прізвище"]
    const initial = parts[0].charAt(0);  // Беремо першу літеру імені
    const lastName = parts[1];   // Беремо прізвище
    return `${initial}. ${lastName}`; // Формуємо потрібний формат
})
// console.log(shortName) // Виведе: ["І. Іваненко", "О. Петров", "М. Коваленко"]