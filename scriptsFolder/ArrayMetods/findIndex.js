//-----------------------------------------------------------

// Синтаксис:
// array.findIndex(callback(element, index, array), thisArg);


// Перебирає масив зліва направо.
// Викликає функцію для кожного елемента.
// Повертає індекс першого елемента, що задовольняє умову.
// Якщо жоден елемент не відповідає умові, повертає -1

//-----------------------------------------------------------

// Приклад 
// const books = [
//     { title: "Book A", author: "Author A" },
//     { title: "Book B", author: "Author B" },
//     { title: "Book C", author: "Author C" }
//   ];
  
//   const index = books.findIndex(book => book.author === "Author B");
//   console.log(index); // 1

//-------------------------------------------------------------

// Використай findIndex() для пошуку індексу першого парного числа

const numbers = [3, 7, 5, 8, 10];

const index = numbers.findIndex(function(num){
    return num === 3;
})

console.log(index)
