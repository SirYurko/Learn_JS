let value1 = null;
let value2 = undefined;
let value3 = "JavaScript";

// Напиши код тут
let finalValue;
finalValue = value1 ?? value2 ?? value3 
console.log(finalValue); // Очікується: "JavaScript"

//-------------------------

let a = 0;
let b = null;
let c = "Text";

let result1 = a || b || c;
let result2 = a ?? b ?? c;

console.log(result1); // c
console.log(result2); // a

//-------------------------

function getGreeting(name) {
    return "Привіт, " + (name ?? "гість") + "!"; //Перевіряє, чи значення name є null або undefined.
    // Якщо так, повертається "гість". Інакше повертається саме значення name.
}

// АБО 

function getGreeting(name) {
    return name == null ? "Привіт, гість!" : "Привіт, " + name + "!";
  }

  
  console.log(getGreeting(null)); // Очікується: "Привіт, гість!"
  console.log(getGreeting(undefined)); // Очікується: "Привіт, гість!"
  console.log(getGreeting("Олексій")); // Очікується: "Привіт, Олексій!"


  //------------------------------------------------------------------
  let userSettings = {
    theme: null,
    fontSize: undefined,
    language: "uk",
  };
  
  let defaultSettings = {
    theme: "light",
    fontSize: 16,
    language: "en",
  };
  
  // Напиши код тут, щоб створити об'єкт `appliedSettings`
  // який використовує значення з userSettings або defaultSettings.
  let appliedSettings = {
     // Якщо userSettings.theme дорівнює null або undefined,
     // використовується значення за замовчуванням defaultSettings.theme.
     // У цьому випадку, оскільки userSettings.theme = null,
     // результатом буде "light".
    theme: userSettings.theme ?? defaultSettings.theme,
     // Якщо userSettings.fontSize дорівнює null або undefined,
     // використовується значення defaultSettings.fontSize.
     // Тут userSettings.fontSize = undefined, тому буде використано 16.
    fontSize: userSettings.fontSize ?? defaultSettings.fontSize,
    // Якщо userSettings.language має значення (не null або undefined),
    // використовується саме воно. Оскільки userSettings.language = "uk",
    // результатом буде "uk".
    language: userSettings.language ?? defaultSettings.language,
  }
  console.log(appliedSettings);
  // Очікується:
  // { theme: "light", fontSize: 16, language: "uk" }


// ----------------------------------------------------------------------


//   6. Складніша: Перевірка входу
// Задача: Напиши функцію checkLogin, яка:
// Приймає два параметри: username і defaultUsername.
// Якщо username дорівнює null або undefined, повертає defaultUsername.
// Інакше повертає username.


function checkLogin(username, defaultUsername) {
  // Напиши код тут
}

console.log(checkLogin(null, "Guest")); // Очікується: "Guest"
console.log(checkLogin(undefined, "Guest")); // Очікується: "Guest"
console.log(checkLogin("User123", "Guest")); // Очікується: "User123"