/*eslint-disable*/

// поверхневе копіювання об'єктів

const original = {
    name: "Юра",
    age: 25,
    skills: {
      programming: "JavaScript",
      design: "Figma"
    }
  };

  console.log(original)

// Клонування через Object.assign()
  const shallowCopy = Object.assign({}, original)

  console.log(shallowCopy)

// Або через spread-оператор ...
  const shallowCopy2 = { ...original}
  
  console.log(shallowCopy2)

  shallowCopy.skills.programming = 'Python' // // Змінюємо вкладений об'єкт (Всі)

// поверневе копіювання масивів 

const arr = [1, 2, [3, 4]];

const shallowArr = arr.slice();

const shallowArr2 = [...arr];

console.log(shallowArr)
console.log(shallowArr2)

shallowArr[2][0] = 99; // Змінюємо вкладений масив [1, 2, [99, 4]]

// deepCopy

const deepCopy = structuredClone(original)

deepCopy.skills.programming = 'C#' // змінюється тільки deepCopy, original не змінюється

console.log(deepCopy)