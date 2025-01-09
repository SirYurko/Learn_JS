/* eslint-disable */

const studentGrades = {
    math: 85,
    english: 78,
    science: 92,
    history: 88
};


let grades = Object.values(studentGrades)
let totalGrades = 0;

grades.forEach(grade => {
    totalGrades += grade;
})

let averageGrade = totalGrades / grades.length;
console.log("Загальна оцінка студенів: " + totalGrades)
console.log("Середня оцінка: " + averageGrade)