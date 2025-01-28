/*eslint-disable*/

const user = {
    name: "Oleksii",
    age: 25
  };
  
  // "Запечатуємо" об'єкт
  Object.seal(user)
  
  // Спроба змінити значення властивості
  user.age = 30; // Працює
  
  // Спроба додати нову властивість
  user.city = "Kyiv"; // Не працює
  
  // Спроба видалити властивість
  delete user.name; // Не працює
  
  console.log(user); // { name: "Oleksii", age: 30 }


  // task - - - -- - - - -- - - - -

  const book = {
    title: "JavaScript",
    author: "John Doe",
    year: 2021,
  }

  Object.seal(book)

  book.year = 2023; // працює

  book.publisher = "Tech Books"; // не працює
  delete book.author; // не працює

  console.log(book)