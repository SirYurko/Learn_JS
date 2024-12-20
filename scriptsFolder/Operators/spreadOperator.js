
// масиви
const array = [1, 4, 5, 2, 5]

const newArray = [ 2, ...array, 2 ]  // копіює елемент з попереднього масива в новий

console.log(newArray)

// об'єкти

const object1 = {
    name: "David",
    age: 23,
    country: "Ukraine",
}

const newObject = {
    ...object1,
    ["last Name"]: "Goposhko",

}
console.log(object1)
console.log(newObject)

// об'єднання елементів масиву

const doubleArray = [...array, ...newArray]

console.log(doubleArray)



//Глибоке копіювання 

const obj1 = { 
    a: 1,
    b: { 
        c: 2,
     } 
};
const obj2 = { ...obj1 };

obj2.b.c = 3;

console.log(obj1.b.c); // 3
console.log(obj2.b.c); // 3