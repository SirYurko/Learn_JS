/*eslint-disable */

const user = {
    name: "Анна",
    profile: {
        age: 28,
        city: "Одеса",
    },
};

console.log(user.name)
console.log(user.profile.city)
console.log(user.profile.street?.numberStreet) // тут в нас немає ні street
// ні numberStreet але повертає помилку тільки на numberStreet, щоб запобігти цього
// потрібно перед numberStreet поставити перевірку ?.
console.log(user.profile.country) // тут в нас немає country,
// - тому повертає тільки undefined без перевірки

// -------------------------------

const library = {
    name: "Central Library",
    books: {
        available: 120,
        categories: {
            fiction: 45,
            science: 30,
        },
    },
};

console.log(library.books.available)
if(library.books?.categories?.history == undefined){
    console.log('Категорія відсутня');
}