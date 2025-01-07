/* eslint-disable */

const sym1 = Symbol();
const sym2 = Symbol();

// console.log(sym1 === sym2);


const sym = Symbol("description");

// console.log(sym.description);


const symKey = Symbol("key");
const obj = {
    [symKey]: "value"
};

console.log(obj[symKey]);

//- - -- - - - -- - - - - - - - -- - - -- - -

