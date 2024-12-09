//---------------------------------------------------------

// Синтаксис:

// array.find(callback(element, index, array), thisArg);

// find() перебирає масив зліва направо.
// Зупиняється і повертає перший елемент, який задовольняє умову.
// Якщо жоден елемент не задовольняє умову, повертає undefined.

//--------------------------------------------------------

const numbers = [3, 5, 7, 8, 10];
const evenNumbers = numbers.find(num => num % 2 === 0)

console.log(evenNumbers) // 8

//--------------------------------------------------------

const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
  ];

const findedBook = books.find(function(book){
    return book.author == "J.K. Rowling"
})

console.log(findedBook) //  title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 
 
